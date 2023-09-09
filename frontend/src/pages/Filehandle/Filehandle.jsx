import React, { useState } from "react";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable} from "firebase/storage";
import { message, Button , Input} from "antd";

function Filehandle() {
  const [file, setFile] = useState("");
  const [student, setStudent] = useState("");
  const [lab, setLab] = useState("");
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";

  //function to upload file to firebase
  const uploadFile = (e) => {

    if(!file ){
      messageApi.error({
        content: `Please fill insert a file`,
        key,
        duration: 2,
      });
      return;
    }
    else if(!student || !lab || !date || !comment){
      messageApi.error({
        content: `Please fill all the fields`,
        key,
        duration: 2,
      });
      return;
    }
    else{
       const filename = `${student}_${lab}_${date}`;
       const filepath = `files/lab${lab}/${filename}`;

        const storageRef = ref(storage, filepath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
          }
        );
    }
  };

  return (
    <div className="border rounded bg-slate-100 w-full h-full flex flex-col justify-center items-center py-40">
      {contextHolder}
      <h1>Upload Your file here</h1>
      <div className="flex flex-col px-5 py-6 bg-white border border-separate gap-4 rounded">
        <Input placeholder="Student Name" onChange={(e) => setStudent(e.target.value) }/>
        <Input placeholder="Lab Name" onChange={(e) => setLab(e.target.value) }/>
        <Input placeholder="Date" onChange={(e) => setDate(e.target.value) }/>
        <Input placeholder="Comment" onChange={(e) => setComment(e.target.value) }/>
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button type="primary" onClick={uploadFile} style={{backgroundColor : '#1677FF'}}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Filehandle;
