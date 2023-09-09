import React from 'react'
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
              <div style={{ padding: '8px 0' }}>
                <Row >
                  <Col span={6} lg={6} md={24} sm={24} xs={24} >
                    <Card style={{backgroundColor: 'yellow' }}>
                        <p>All Earnings</p>
                    </Card>
                    
                  </Col>
                  <Col span={6} lg={6} md={24} sm={24} xs={24} >
                    <Card style={{backgroundColor: 'green' }}>
                    <p>Page Views</p>
                    </Card>
                    
                  </Col>
                  <Col span={6} lg={6} md={24} sm={24} xs={24} >
                    <Card style={{backgroundColor: 'red' }}>
                    <p>Task Complete</p>
                    </Card>
                    
                  </Col>
                  <Col span={6} lg={6} md={24} sm={24} xs={24} >
                    <Card style={{ backgroundColor: 'blue' }}>
                        <p>Card Doenload</p>
                    </Card>
                  </Col>
                </Row>
              </div>

              <div>

                <Row>
                  <Col span={18} style={{
                    backgroundColor: 'red',
                    height: '300px'
                  }}>
                    col-6 col-pull-18
                  </Col>

                  <Col span={6} style={{
                    backgroundColor: 'blue',
                    height: '300px'
                  }}>
                    col-18 col-push-6
                  </Col>
                </Row>

              </div>

            </Content>

            {/* Footer */}


          </Layout>
    </div>
  )
}

export default Body
