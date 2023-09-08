import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";

function Filehandle() {
  const [file, setFile] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';

  const { Dragger } = Upload;
  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      setFile(e.dataTransfer.files);
      console.log(file);
    },
  };

  const fileupload = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = "updatable";
  };

  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading...",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "success",
        content: "Loaded!",
        duration: 2,
      });
    }, 1000);
  };
  return (
    <div className="border w-full h-full flex flex-col justify-center items-center py-80">
      {contextHolder}
      <h1>Upload Your file here</h1>
      <div>
        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibited from
            uploading company data or other banned files.
          </p>
        </Dragger>
      </div>
      <Button type="primary" onClick={openMessage}>
        Open the message box
      </Button>
    </div>
  );
}

export default Filehandle;
