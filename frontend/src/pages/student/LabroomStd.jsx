import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams from react-router-dom
import Layout from "./layout";
import DataForm from "../../components/student/Dataform";
import { Button } from "antd";

function LabroomStd() {
  const [labName, setLabName] = useState("");
  const { id } = useParams();

  const uploadhandler = () => {
    // Construct the URL with the labName as a query parameter
    const fileUploadUrl = `/fileupload/${id}`;
    window.location.href = fileUploadUrl;
  };
  const meetinghandler = () => {
    const url = "/student/meetingroom";
    window.open(url, "_blank");
  };

  const closehandler = () => {
    window.location.href = "/Sbody";
  };
  // Callback function to set the lab name in the state
  const handleLabNameFetched = (name) => {
    setLabName(name);
  };
  return (
    <Layout>
      <div className="w-full flex-col border  max-h-screen overflow-y-auto">
       <DataForm id={id} onLabNameFetched={handleLabNameFetched} />
        <div className="flex-grow w-full p-4 px-8">
          <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
            <div className="text-xl whitespace-nowrap">
              Upload Your Answer :
            </div>
            <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
              <Button
                type="primary"
                onClick={uploadhandler}
                style={{ backgroundColor: "#296F9D" }}
              >
                Upload
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-grow w-full p-4 px-8">
          <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
            <div className="text-xl whitespace-nowrap">
              Meeting with Instructor :
            </div>
            <div className="grow shrink  rounded bg-slate-50 py-2 px-5">
              <Button
                type="primary"
                onClick={meetinghandler}
                style={{ backgroundColor: "#296F9D" }}
              >
                Start Meeting
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-grow w-full p-4 px-4">
          <div className="w-full h-full px-5 rounded-lg py-2 flex items-center gap-5">
            <div className="grow shrink  rounded bg-slate-50 py-2 px-5 flex justify-center">
              <Button
                type="primary"
                onClick={closehandler}
                style={{
                  backgroundColor: "#296F9D",
                  width: 200,
                  height: 50,
                  fontSize: "1.5em",
                }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LabroomStd;
