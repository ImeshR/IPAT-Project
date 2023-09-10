import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/register/form";

function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Register</h1>
        <div className="w-full pt-10 font-semibold text-3xl flex justify-center">
          <Form />
        </div>
        <div className="text-center mt-4">
          Already have an account? <Link to="/login" className="text-blue-500">Login here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;