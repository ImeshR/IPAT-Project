import React from 'react';
import { Layout } from 'antd';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Body from './Components/Body';

function StudentDashboard() {
  return (
    <div>
      <Layout>
        <Sidebar />
        <Layout>
          <Header />
          <Body />
        </Layout>
      </Layout>
    </div>
  );
}

export default StudentDashboard;
