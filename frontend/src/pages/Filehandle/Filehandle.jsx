import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { storage } from "../../firebase-config";
import { ref, uploadBytesResumable } from "firebase/storage";
import { message, Button, Input, DatePicker, Tooltip } from "antd";
const { TextArea } = Input;
const formatNumber = (value) => new Intl.NumberFormat().format(value);
const NumericInput = (props) => {
  const { value, onChange } = props;
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  // '.' at the end or only '-' in the input box.
  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };
  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    "Input a number"
  );
  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={16}
      />
    </Tooltip>
  );
};
function Filehandle() {
  const [file, setFile] = useState("");
  const [student, setStudent] = useState("");
  const [lab, setLab] = useState();
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");
  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const [value, setValue] = useState("");
  const onChange = (date, dateString) => {
    setDate(dateString);
  };

  const { id } = useParams();
  console.log(id);

  //function to upload file to firebase
  const uploadFile = (e) => {
    if (!file) {
      messageApi.error({
        content: `Please fill insert a file`,
        key,
        duration: 2,
      });
      return;
    } else if (!student || !value || !date || !comment) {
      messageApi.error({
        content: `Please fill all the fields`,
        key,
        duration: 2,
      });
      return;
    } else {
      
      const filename = `${student}_lab0${value}_${date}`;
      const filepath = `files/lab${value}/${filename}`;
     
      console.log(filepath);
    
      const storageRef = ref(storage, filepath);

      const uploadTask = uploadBytesResumable(storageRef, file);
      
      uploadTask.on("state_changed", (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      });

      uploadTask.then(() => {
        message.success({
          content: `File uploaded successfully`,
          duration: 2,
        });
      });
      window.location.href = '/Sbody';
    }
  };
  return (
    <div className="border rounded bg-slate-100 w-full h-full flex flex-col justify-center items-center py-40">
      {contextHolder}
      <h1 className="font-bold">Upload Your file here</h1>
      <div className="flex flex-col px-5 py-6 bg-white border border-separate gap-4 rounded">
        <Input
          placeholder="Student Name"
          onChange={(e) => setStudent(e.target.value)}
        />
        {/* <Input
          placeholder="Lab Number"
          onChange={(e) => setLab(e.target.value)}
        /> */}
        <NumericInput
          style={{
            width: 120,
          }}
          value={value}
          onChange={setValue}
        />
        <TextArea
          rows={4}
          placeholder="Comments"
          maxLength={6}
          onChange={(e) => setComment(e.target.value)}
        />
        <DatePicker onChange={onChange} />
        <Input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button
          type="primary"
          onClick={uploadFile}
          style={{ backgroundColor: "#1677FF" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Filehandle;
