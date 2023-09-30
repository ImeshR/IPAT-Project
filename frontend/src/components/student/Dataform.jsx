import React, { useState, useEffect } from "react";
import { Steps, Spin } from "antd";
import axios from "axios";

function formatDateToYYYYMMDD(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to month because it's zero-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Dataform ({ id }) {
  const [labroomData, setLabroomData] = useState({
    name: "",
    description: "",
    capacity: 0,
    instructorname: "",
    instructoremail: "",
    labdate: "",
    step: [],
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch lab room data using the provided URL
    axios
      .get(`http://localhost:5000/api/student/enroll/${id}`)
      .then((response) => {
        // Format the date here
        response.data.labdate = formatDateToYYYYMMDD(response.data.labdate);
        setLabroomData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onChangeStep = (value) => {
    console.log("onChangeStep:", value);
    setCurrentStep(value);
  };
  return (
    <div className="flex-grow w-full p-4 px-4">
       {loading ? ( // Conditional rendering based on the loading state
        <Spin size="large" style={{width: "100%",display: "flex", justifyContent: "center", alignItems: "center"}}/> // Display loading spinner
      ) : (
        <div className="w-full rounded py-5 flex-col flex px-5 gap-5">
        <div className="w-full flex justify-between">
        <div className="font-semibold text-3xl text-primary capitalize">{labroomData.name}</div>
         <div className="text-4xl pr-10">👾</div>
        </div>
        <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
          <div className="text-xl whitespace-nowrap">Description : </div>
          <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
            {labroomData.description}
          </div>
        </div>
        <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
          <div className="text-xl whitespace-nowrap">Capacity : </div>
          <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
            {labroomData.capacity}
          </div>
        </div>
        <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
          <div className="text-xl whitespace-nowrap">Instructor Name : </div>
          <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
            {labroomData.instructorname}
          </div>
        </div>
        <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
          <div className="text-xl whitespace-nowrap">Instructor Email : </div>
          <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
            {labroomData.instructoremail}
          </div>
        </div>
        <div className="w-full h-full px-5 rounded-lg py-2 border flex items-center gap-5">
          <div className="text-xl whitespace-nowrap">Lab Date : </div>
          <div className="grow shrink border rounded bg-slate-50 py-2 px-5">
            {labroomData.labdate}
          </div>
        </div>
        <div className="w-full h-full px-5 rounded-lg py-2 border flex flex-col gap-5">
          <div className="text-xl whitespace-nowrap">Steps : </div>
          <div className="grow shrink border rounded bg-slate-50 py-2 px-20">
            <Steps
              current={currentStep}
              onChange={onChangeStep}
              direction="vertical"
              style={{color: "#296F9D"}}
              items={labroomData.step.map((step, index) => ({
                title: `Step ${index + 1}`,
                description: step,
              }))}
            />
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Dataform;
