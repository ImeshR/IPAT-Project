import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal, Form, Input,message } from 'antd';

const { Column } = Table;

const LabTable = ({ userEmail }) => {
  const [labrooms, setLabrooms] = useState([]);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [selectedLabroom, setSelectedLabroom] = useState(null);
  const [isUpdateFormVisible, setUpdateFormVisible] = useState(false); // Track if update form is open
  const [updatedData, setUpdatedData] = useState(null); // Store updated data here
  const [newStep, setNewStep] = useState('');
  const [newStepsInput, setNewStepsInput] = useState('');

  useEffect(() => {
    // Fetch labroom data using the provided URL with userEmail
    fetchLabrooms();
  }, [userEmail]);

  const fetchLabrooms = () => {
    // Replace this URL with your actual API endpoint
    const apiUrl = `http://localhost:5000/api/labroom/getall/${userEmail}`;

    // Fetch labroom data
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setLabrooms(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const showViewModal = (record) => {
    setSelectedLabroom(record);
    setViewModalVisible(true);
  };

  const hideViewModal = () => {
    setSelectedLabroom(null);
    setViewModalVisible(false);
  };

  const showUpdateForm = (record) => {
    setUpdatedData(record);
    setUpdateFormVisible(true);
  };

  const hideUpdateForm = () => {
    setUpdatedData(null);
    setUpdateFormVisible(false);
  };


  const handleFormSubmit = (values) => {
    const apiUrl = `http://localhost:5000/api/labroom/update/${updatedData._id}`;

    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (response.ok) {
          message.success('Labroom updated successfully');
          hideUpdateForm();
          fetchLabrooms(); // Refresh the table data
        } else {
          message.error('Labroom update failed. Please try again later.');
        }
      })
      .catch((error) => {
        console.error(error);
        message.error('Labroom update failed. Please try again later.');
      });
  };


  const handleNewStepsInputChange = (e) => {
    setNewStepsInput(e.target.value);
  };

  // Function to add new steps
  const addNewSteps = () => {
    // Split the input by commas and trim spaces
    const newStepsArray = newStepsInput
      .split(',')
      .map((step) => step.trim())
      .filter((step) => step !== ''); // Remove empty steps

    // Ensure the array doesn't exceed the maximum size (20)
    if (newStepsArray.length + updatedData.step.length <= 20) {
      setUpdatedData((prevData) => ({
        ...prevData,
        step: [...prevData.step, ...newStepsArray],
      }));
      setNewStepsInput(''); // Clear the input
    } else {
      // Show an error message if the array exceeds the maximum size
      message.error('Maximum number of steps (20) exceeded.');
    }
  };

  return (
    <div className="w-full border py-5">
      <Table dataSource={labrooms}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Capacity" dataIndex="capacity" key="capacity" />
        <Column title="Enrollemnt" dataIndex="_id" key="_id" />
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <Button
                style={{ backgroundColor: '#dcfce7' }}
                onClick={() => showViewModal(record)}
              >
                View
              </Button>
              <Button
                style={{ backgroundColor: '#4096FF' }}
                onClick={() => showUpdateForm(record)}
              >
                Update
              </Button>
            </Space>
          )}
        />
      </Table>

      <Modal
        title="Labroom Details"
        visible={viewModalVisible}
        onCancel={hideViewModal}
        footer={null}
      >
        {selectedLabroom && (
          <div>
            <p>Name: {selectedLabroom.name}</p>
            <p>Description: {selectedLabroom.description}</p>
            <p>Capacity: {selectedLabroom.capacity}</p>
            {/* Add other fields here */}
          </div>
        )}
      </Modal>

      {/* Update Form */}
      <Modal
        title="Update Labroom"
        visible={isUpdateFormVisible}
        onCancel={hideUpdateForm}
        footer={null}
      >
        {updatedData && (
          <Form
          name="updateLabroomForm"
          onFinish={handleFormSubmit}
          initialValues={updatedData}
          >
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input the description!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Capacity"
              name="capacity"
              rules={[{ required: true, message: 'Please input the capacity!' }]}
            >
              <Input />
            </Form.Item>
            {/* for enrollmentkey */}
            <Form.Item
                label="Enrollment Key"
                name="enrollmentkey"
                rules={[{ required: true, message: 'Please input the enrollment key!' }]}
            >
                <Input />
            </Form.Item>
            {/* for instructorname */}
            <Form.Item
                label="Instructor Name"
                name="instructorname"
                rules={[{ required: true, message: 'Please input the instructor name!' }]}
            >
                <Input />
            </Form.Item>
            {/* for labdate */}
            <Form.Item
                label="Lab Date"
                name="labdate"
                rules={[{ required: true, message: 'Please input the lab date!' }]}
            >
                <Input />
            </Form.Item>
            {updatedData.step.map((step, index) => (
              <Form.Item
                key={index}
                label={`Step ${index + 1}`}
                name={['step', index]}
                rules={[
                  { required: true, message: 'Please input the step!' },
                ]}
              >
                <Input />
              </Form.Item>
            ))}

            {/* New Steps Input Field */}
            <Form.Item label="New Steps">
              <Input.TextArea
                rows={4}
                value={newStepsInput}
                onChange={handleNewStepsInputChange}
                placeholder="Enter new steps, separated by commas"
              />
              <Button type="dashed" onClick={addNewSteps}>
                Add New Steps
              </Button>
            </Form.Item>

            <Button type="primary" htmlType="submit" style={{ width: '100%', backgroundColor: '#4096FF' }}>
              Update
            </Button>
          </Form>
        )}
      </Modal>
    </div>
  );
};

export default LabTable;
