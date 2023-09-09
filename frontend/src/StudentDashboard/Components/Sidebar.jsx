import React from 'react'
import { useState } from 'react';
import SubMenu from 'antd/es/menu/SubMenu';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MenuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons"
import './Sidebar.css'
const { Sider } = Layout;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);
  return (
    <div id='sidebar'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
          <Menu
            mode="inline"
          >
            <Menu.Item>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Menu.Item>





            <Menu.Item>

              <MenuOutlined />
              <span>Navigation</span>

            </Menu.Item>


          </Menu>
        </Sider>
    </div>
  )
}

export default Sidebar
