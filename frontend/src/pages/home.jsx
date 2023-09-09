import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



const Home = () => {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
  
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

export default Home
