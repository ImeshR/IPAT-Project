import React, { useState } from 'react';
import { Button,Form, Input, message } from "antd";
import axios from "axios";

const Enrollment = () => {
  const [labKey, setLabKey] = useState(null);

    const onFinish = (values) => {
        const enteredLabKey = values.key;
        console.log(enteredLabKey);
        axios.get(`http://localhost:5000/api/student/enroll/check/${enteredLabKey}`)
        .then((response) => {
          const { data } = response;
          console.log(data);
          if (data === "valid") {
            sessionStorage.setItem('labKey', enteredLabKey);
            // Redirect to the labroom
            window.location.href = `/studnetlabroom/${enteredLabKey}`;
          } else {
            // Lab key is invalid, display an error message
            message.error("Invalid lab enrollment key. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error checking lab key:", error);
          message.error("An error occurred while checking the lab key. Please try again later.");
        });
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };
      
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2">
          <div className="text-xl font-semibold text-primary w-full">
            Enter Enrollment Key
          </div>
          <div className="w-full">
            <Form
              name="basic"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              style={{
                maxWidth: 800,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Lab Enrollment Key"
                name="key"
                rules={[
                  {
                    required: true,
                    message: "Please input lab enrollment key!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#296F9D",
                    height: "40px",
                    fontSize: "1.4em",
                  }}
                >
                  Join Lab
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
  )
}

export default Enrollment
