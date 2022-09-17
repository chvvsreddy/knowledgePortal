import React from 'react'
import { Col, Row, Form, Button } from 'antd';
import './index.css'

function Profile() {
    return (
        <> <Form layout="vertical">
            
            <Row gutter={24} className="profile">
                <Col span={24} className="mb-10">
                <a href='/ProfileEdit'><Button type="primary" shape="round" ghost className='f-right'>Edit</Button></a>
                </Col>
                <Col span={24} >
                    <h4>Basic details</h4>
                </Col>
                <Col span={8} >
                    <Form.Item label="First name:" name="layout">
                        <p>Jim</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Last name:" name="layout">
                        <p>Benjamin</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Date of Birth:" name="layout">
                        <p>Nov-25-2000 </p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Gender:" name="layout">
                        <p>Male</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Email" name="layout">
                        <p>jimb@gmail.com </p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Phone number:" name="layout">
                        <p>+1-202-555-0142</p>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={24} className="profile">
                <Col span={24} >
                    <h4>Location details</h4>
                </Col>
                <Col span={8} >
                    <Form.Item label="Country :" name="layout">
                        <p>India</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Residing State:" name="layout">
                        <p>Any</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Residing City:" name="layout">
                        <p>Any</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Citizenship:" name="layout">
                        <p>Yes</p>
                    </Form.Item>
                </Col>
               
            </Row>
            <Row gutter={24} className="profile">
                <Col span={24} >
                    <h4>Professional details</h4>
                </Col>
                <Col span={8} >
                    <Form.Item label="Qualification :" name="layout">
                        <p>Degree</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="University:" name="layout">
                        <p>Bambay national university</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Languages:" name="layout">
                        <p>English, Hindi, Telugu</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Course specilized in" name="layout">
                        <p>React, Angular</p>
                    </Form.Item>
                </Col>
               
            </Row>
        </Form>
        </>
    )
}

export default Profile