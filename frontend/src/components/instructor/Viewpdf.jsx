import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal, Form, Input,message } from 'antd';
const { Column } = Table;

const Viewpdf = () => {
  return (
    <div className="w-full border">
       {/* <Table dataSource={labrooms}>
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Capacity" dataIndex="capacity" key="capacity" />
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
      </Table> */}

    </div>
  )
}

export default Viewpdf
