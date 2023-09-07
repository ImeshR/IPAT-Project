import React from 'react'
import { Layout, Menu } from 'antd';

const { Header,Footer} = Layout;

export default function student_dashboard() {
  return (
    <Layout>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <div className="demo-logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}  />
        </Header>
        
        

        <Footer style={{ textAlign: 'center' }}>CODEWAVE ©2023 Created by G27</Footer>
      </Layout>
  )
}
