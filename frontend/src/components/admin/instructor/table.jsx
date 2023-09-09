import React from 'react'
import { Space, Table, Button } from 'antd';
const columns = [
  {
    title: 'First Name',
    dataIndex: 'fname',
    key: 'fname',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'lname',
    key: 'lname',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Contact',
    key: 'contact',
    dataIndex: 'contact',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Button style={{backgroundColor: '#dcfce7'}}>Update</Button>
        <Button style={{backgroundColor: '#fee2e2'}}>Delete</Button>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    fname: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    fname: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    fname: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const table = () => {
  return (
    <div className="w-full pt-10">
      <Table columns={columns} dataSource={data} />
    </div>
  )
}

export default table
