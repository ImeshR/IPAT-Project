import React from 'react';
import Enrollment from './Enrollment';

import { Layout, Col, Row, Card } from 'antd';

const { Content } = Layout;

const Body = () => {
  return (
    <div>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div style={{ padding: '10px 0' }}>
            <Row>
              <Col span={10} lg={10} md={24} sm={24} xs={24} style={{ display: 'flex', justifyContent: 'center' }}>
                <Card>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <p className="text-white bg-blue-300 py-2 px-4 mb-3">Enroll Here</p>
                    <Enrollment /> 
                  </div>
                </Card>
              </Col>
            </Row>
          </div>
          {/* Rest of your content */}
          <div>
            <Row>
              <Col span={18} style={{ backgroundColor: 'red', height: '300px' }}>
                col-6 col-pull-20
              </Col>
              <Col span={6} style={{ backgroundColor: 'blue', height: '300px' }}>
                col-18 col-push-6
              </Col>
            </Row>
          </div>
        </Content>
        {/* Footer */}
      </Layout>
    </div>
  );
};

export default Body;
