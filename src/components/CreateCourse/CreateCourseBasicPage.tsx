import React from 'react'
import './index.css'
import { Row, Col, Form, Button, Checkbox } from 'antd';

const CreateCourseBasicPage = () => {
    return (
        <>
            <h1 className="page-title">Create Course</h1>
            <div className='course-header'>
                <div className='inner-container'>
                    <Row gutter={24}>
                        <Col span={17}>
                            <h2>Python for Everybody Specialization</h2>
                            <p>Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data. Learn to Program and Analyze Data with Python. Develop programs to gather, clean, analyze, and visualize data.</p>
                            <p className='course-instructor'><img src={require('../../images/user.png')} />Charles Russell  </p>
                        </Col>
                        <Col span={7}>
                        </Col>
                    </Row>
                </div>
            </div>
            <Form layout="vertical">
            <Row gutter={24} className="mt-20 mb-20">
                <Col span={17}>
                <Row gutter={24} className="profile">
                <Col span={8} >
                    <Form.Item label="Catogory" name="layout">
                        <p>Web Devlopment</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Sub category" name="layout">
                        <p>React</p>
                    </Form.Item>
                </Col>
                <Col span={8} >
                    <Form.Item label="Level" name="layout">
                        <p>Beginner</p>
                    </Form.Item>
                </Col>
                <Col span={24} >
                    <div className='status-box'>
                    <Row gutter={24}>
                        <Col span={16}>
                            <h5>Course price</h5>
                            <Checkbox checked>I would like to offer this course for free</Checkbox>
                        </Col>
                        <Col span={8} className="align-middle align-right">
                        <Button type="primary" shape="round">Yes, Continue</Button>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
                </Col>
                <Col></Col>
            </Row>

            </Form>
        </>
    )
}

export default CreateCourseBasicPage