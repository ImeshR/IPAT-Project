import React from "react";
import Sidebar from "../../NewStudentDashboard/Sidebar";
import DataForm from "../../components/student/Dataform";
import { Button } from "antd";

function LabroomStd() {
  const uploadhandler = () => {
    window.location.href = '/fileupload';
  };
  const meetinghandler = () => {
    window.location.href = '/fileupload';
  };
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex-col px-10">
        <DataForm />
        <div className="flex-grow w-full p-4 border px-4 overflow-auto">
          <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
            <div className="text-xl whitespace-nowrap">Upload Your Answer : </div>
            <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
              <Button type="primary" onClick={uploadhandler} style={{backgroundColor: "#4096FF"}}>Upload</Button>
            </div>
          </div>
        </div>
        <div className="flex-grow w-full p-4 border px-4 overflow-auto">
          <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
            <div className="text-xl whitespace-nowrap">Meeting with Instructor : </div>
            <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
              <Button type="primary" onClick={meetinghandler} style={{backgroundColor: "#4096FF"}}>Start Meeting</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LabroomStd;
