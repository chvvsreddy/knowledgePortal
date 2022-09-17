import React from 'react';
import { Row, Col, Progress} from 'antd';
import {StarFilled} from '@ant-design/icons';
import './index.css'

function CourseItemStarted() {
  return (
    <div className='course'>
        <div className='course-img'>
        <img src={require('../../images/course-2.png')} />
        </div>
        <div className='course-info'>
            <h4>Learn Python: The complete python programming course</h4>
            <p>Avinash jain - The Codex</p>
            <Row gutter={24}>
              <Col span={12}><p className='stars'><StarFilled /><StarFilled /><StarFilled /><StarFilled /></p></Col>
              <Col span={12} className="text-right"><p>243 Reviews</p></Col>
            </Row>
            <div className='mt-10'>
            <Progress percent={70}  size="small"/>
            </div>
            
        </div>
       
    </div>
  )
}

export default CourseItemStarted