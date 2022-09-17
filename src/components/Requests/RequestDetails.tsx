import React from 'react'
import { Col, Row, Form, Button } from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';

import './index.css'

const RequestDetails = () => {
  return (
    <> <Form layout="vertical">
            
    <Row gutter={24} className="profile">
        <Col span={24} className="mb-10">
        <a href='/Requests'><Button type="primary" shape="round" ghost  className='f-right'><ArrowLeftOutlined /> Back</Button></a>
        </Col>
         <Col span={8} >
            <Form.Item label="Request ID:" name="layout">
                <p>REQ00563</p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Catogory:" name="layout">
                <p>Web Devlopment</p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Sub category:" name="layout">
                <p>React</p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Name" name="layout">
                <p>Lee Nonmi</p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Request Course Title:" name="layout">
                <p>React Course</p>
            </Form.Item>
        </Col>        
        <Col span={8} >
            <Form.Item label="Description:" name="layout">
                <p>Full course on react for Beginner starting from local setup to live the app </p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Profile Type :" name="layout">
                <p>Student</p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Level:" name="layout">
                <p>Advanced</p>
            </Form.Item>
        </Col>
        <Col span={8} >
            <Form.Item label="Status:" name="layout">
                <p>Need Approval</p>
            </Form.Item>
        </Col>
        <Col span={24} >
            <div className='status-box text-center'>
                <Button type="primary" shape="round">Approve</Button>
                <Button type="primary" shape="round" disabled>Advertise to Instructors</Button>
                <Button type="primary" shape="round" disabled>Crowd funding</Button>
                <Button type="primary" shape="round" disabled>Instructor finalized</Button>
                <Button type="primary" shape="round" disabled>Review Course</Button>
                <Button type="primary" shape="round" disabled>Pay Instructor</Button>
            </div>
        </Col>
    </Row>

</Form>
</>
  )
}

export default RequestDetails