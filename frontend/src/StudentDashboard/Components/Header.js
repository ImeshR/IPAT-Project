
import React from 'react'
import './Header.css'
import { Menu, Layout } from 'antd';
import {
    SearchOutlined,
    CompressOutlined
  } from "@ant-design/icons"

  const { Header } = Layout;
const Head = () => {
  return (
    <div>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
        }} 
      >
        <Menu    
              id="header"
                theme="dark"

                mode="horizontal"
              >
                

               

                {/* float right */}
                <div>
                  


                </div>
          </Menu>
        </Header>
    </div>
  )
}

export default Head
