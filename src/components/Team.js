import React, { Component } from "react";
import { Card, Row, Col} from 'antd';

const { Meta } = Card;

export default class Team extends Component {
  render() {
      return (
          
        <section id="photos" style={{ background: 'white' }}>
          <div className="row" >
          <hr/>
            <div className="twelve columns" >
            <h1>Our Team</h1>
              <Row>
                <Col sm={4} md={4} lg={4}></Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card 
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/insta.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Soaring Eagles"
                    description="Engineering phddddd testing the length"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/header-background.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px' }}
                    title="Aayush Bhaiya"
                    description="Different"
                  />
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/Untitled-1.gif" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Sahil Raj"
                    description="Enthusiast Enthusiast"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/header-background.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Satyam Bhaiya"
                    description="Best"
                  />
                  </Card>
                </Col>
                <Col xs={12} sm={8} md={8} lg={8}>
                  <Card
                    hoverable={false}
                    style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center'}}
                    bordered={false}
                    cover={<img alt="example" src="images/NidhiPrayas.jpg" />}
                  >
                  <Meta style={{ fontSize: '15px'}}
                    title="Member1"
                    description="Second"
                  />
                  </Card>
                </Col>
              </Row>

            </div>
          </div>
          <hr/>
        </section>
      )
  }
}