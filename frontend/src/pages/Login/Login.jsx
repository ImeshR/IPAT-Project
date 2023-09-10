import React from "react";
import { Link } from "react-router-dom";
import Form from "../../components/login/form";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">Log In</h1>
        <div className="flex justify-between">
          <div className="w-1/2 bg-blue-500 p-8 rounded-lg">
            <h2 className="text-white text-4xl font-semibold mb-4">CodeWave</h2>
            {/* Add any additional content for the left side */}
          </div>
          <div className="w-1/2 p-4">
            <Form />
          </div>
        </div>
        <div className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;