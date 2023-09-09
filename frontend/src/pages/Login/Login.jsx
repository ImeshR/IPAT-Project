import React from "react";
import Form from "../../components/login/form";

const Login = () => {
  return (
    <div className="w-full h-[100vh] px-96 py-10">
      <div className="border rounded-2xl w-full h-[600px] flex-col  justify-center items-center bg-slate-50 pt-10">
        <div className="w-full font-semibold text-3xl flex justify-center">
          Register
        </div>
        <div className="w-full flex justify-evenly px-5 py-2">
          <div className=" bg-[#4096FF] flex-col w-1/2 h-[500px] grow">
            <div className="text-white font-semibold text-3xl pl-5 pt-10">CodeWave</div>
            
          </div>
          <div className="w-full border pt-20 font-semibold text-3xl flex justify-center">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
