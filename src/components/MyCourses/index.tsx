import React, { useState } from 'react'
import { Row, Col, Divider, Button, Modal} from 'antd';

import CourseItemRequested from './CourseItemRequested';
import CourseItemStarted from './CourseItemStarted';
import CreateCourseStudentRequest from '../CreateCourse/CreateCourseStudentRequest';
import './index.css'


function MyCourses() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
    <h3 className='mb-20'>
      Requested Courses 
        <a href='/CreateCourseInitiation'><Button type="primary" shape="round" ghost className='f-right'>Create course</Button></a>
    <Button type="primary" shape="round" ghost className='f-right' onClick={showModal}>Request course</Button>
    </h3>
    <Row gutter={24}>
      <Col span={8}> <CourseItemRequested /></Col>
      <Col span={8}> <CourseItemRequested /></Col>
      <Col span={8}> <CourseItemRequested /></Col> 
    </Row>
    <Divider />
    <h3>Inprogress</h3>
    <Row gutter={24}>
      <Col span={8}> <CourseItemStarted /></Col>
      <Col span={8}> <CourseItemStarted /></Col>
      <Col span={8}> <CourseItemStarted /></Col> 
    </Row>
    <Divider />
    <h3>Completed</h3>
    <Row gutter={24}>
      <Col span={8}> <CourseItemStarted /></Col>
      <Col span={8}> <CourseItemStarted /></Col>
      <Col span={8}> <CourseItemStarted /></Col> 
    </Row>
    {/* Create course request popup */}
    <Modal visible={visible} centered width={800} title="Course Request Details"
        onOk={handleOk} onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel} shape="round">Cancel</Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk} shape="round">Submit Request
          </Button>,
        ]}
      >
      <CreateCourseStudentRequest />
      </Modal>
    </>
  )
}

export default MyCourses