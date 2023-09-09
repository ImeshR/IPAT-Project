import React from "react";
import Form from "../../components/register/form";

function Register() {
  return (
    <div className="w-full h-[100vh] px-40 py-10">
      <div className="border rounded-2xl w-full h-[600px] flex-col  justify-center items-center bg-slate-50 pt-10">
        <div className="w-full font-semibold text-3xl flex justify-center">
          Register
        </div>
        <div className="w-full pt-20 font-semibold text-3xl flex justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Register;
