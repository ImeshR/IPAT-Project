import React, { useRef, useEffect } from "react";
import io from "socket.io-client";
import Sidebar from "../../NewStudentDashboard/Sidebar";
import { Button } from "antd";
const { RTCPeerConnection, RTCSessionDescription } = window;


const MeetingsStd = (props) => {
    const userVideo = useRef();
    const partnerVideo = useRef();
    const socket = useRef();
    const peerRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();
    const senders = useRef([]);
    //define pc 
    const pc = new RTCPeerConnection({
        iceServers: [
            {
                urls: "stun:stun.l.google.com:19302",
            },
        ],
    });

    

    useEffect(() => {
        socket.current = io.connect("/");
        socket.current.on("yourID", (id) => {
            console.log(id);
        })
        socket.current.on("allUsers", (users) => {
            console.log(users);
        })

        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;
            
            socket.current.on("hey", (data) => {
                otherUser.current = data.from;
                console.log(data);
                let pc = createPeer();
                pc.addStream(stream);
                pc.createOffer().then((description) => {
                    pc.setLocalDescription(description).then(() => {
                        socket.current.emit("offer", {
                            target: data.from,
                            caller: socket.current.id,
                            sdp: pc.localDescription
                        });
                    });
                });
            })

            socket.current.on("offer", (data) => {
                console.log(data);
                let pc = createPeer();
                pc.addStream(stream);
                pc.setRemoteDescription(new RTCSessionDescription(data.sdp)).then(() => {
                    pc.createAnswer().then((description) => {
                        pc.setLocalDescription(description).then(() => {
                            socket.current.emit("answer", {
                                target: data.caller,
                                sdp: pc.localDescription
                            })
                        });
                    });
                });
            });

            socket.current.on("answer", (data) => {
                console.log(data);
                pc.setRemoteDescription(new RTCSessionDescription(data.sdp)).then(() => {
                    console.log("setRemoteDescription");
                });
            });

            socket.current.on("candidate", (data) => {
                console.log("sending candidate");
                pc.addIceCandidate(new RTCIceCandidate(data.candidate));
            });

            socket.current.on("end", () => {
                console.log("ending call");
                userVideo.current.srcObject.getTracks().forEach(track => track.stop());
                partnerVideo.current.srcObject.getTracks().forEach(track => track.stop());
                if (peerRef.current) {
                    peerRef.current.destroy();
                }
            });
        });

    }, []);

    function createPeer() {
        let pc = new RTCPeerConnection({ iceServers: [{ urls: "stun:stun.l.google.com:19302" }] });
        pc.onicecandidate = handleICECandidateEvent;
        pc.onaddstream = handleAddStreamEvent;
        pc.onremovestream = handleRemoveStreamEvent;
        return pc;
    }

    function handleICECandidateEvent(e) {
        if (e.candidate) {
            socket.current.emit("candidate", {
                target: otherUser.current,
                candidate: e.candidate
            });
        }
    }

    function handleAddStreamEvent(e) {
        console.log("addStream");
        partnerVideo.current.srcObject = e.stream;
    }

    function handleRemoveStreamEvent(e) {
        console.log("removeStream");
    }

    function shareScreen() {
        navigator.mediaDevices.getDisplayMedia({ cursor: true }).then(stream => {
            let videoTrack = stream.getVideoTracks()[0];
            senders.current.find(sender => sender.track.kind === "video").replaceTrack(videoTrack);
            userVideo.current.srcObject = stream;
            stream.getTracks().forEach(track => senders.current.push(peerRef.current.addTrack(track, stream)));
            stream.getTracks().forEach(track => userStream.current.addTrack(track));
        })
    }

    function endCall() {
        socket.current.emit("end");
        userVideo.current.srcObject.getTracks().forEach(track => track.stop());
        partnerVideo.current.srcObject.getTracks().forEach(track => track.stop());
        if (peerRef.current) {
            peerRef.current.destroy();
        }
    }


  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex-col px-10 ">
      <div className="w-full flex gap-5 ">
        <video controls style={{height: 500, width: 500}} autoPlay ref={userVideo} />
        <video controls style={{height: 500, width: 500}} autoPlay ref={partnerVideo} />
        <Button onClick={shareScreen}>Share screen</Button>
        </div>
      </div>
    </div>
  )
}

export default MeetingsStd
