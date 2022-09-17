import React from 'react'
import {Row, Col } from 'antd';
import './index.css'
import UserItem from './UserItem'

function Instructors() {
  return (
    <>
    <h3>Instructors </h3>
    <Row gutter={24}>
      <Col span="8"><UserItem /></Col>
      <Col span="8"><UserItem /></Col>
      <Col span="8"><UserItem /></Col>
    </Row>
    
    </>
  )
}

export default Instructors