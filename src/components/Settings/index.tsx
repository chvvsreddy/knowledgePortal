import React from 'react'
import { Col, Row, Form, Checkbox, Button } from 'antd';
import "./index.css"

function Settings() {
  return (
    <>
      <Form layout="vertical">
        <Row gutter={24} className="settings">
          <Col span={24} >
            <h4>Account settings</h4>
            <div className='round-cornors'>
              <Row gutter={24}>
                <Col span={12}>
                Default login:  
                    <Button.Group className="round-button ml-15" >
                        <Button value="large" type="primary">Student</Button>
                        <Button value="default">Instructor</Button>
                    </Button.Group>
                </Col>
                <Col span={12}>
                <Checkbox >Keep Public</Checkbox>
                </Col>
              </Row>
           

            </div>
          </Col>
          <Col span={24} >
            <h4 className='mt-20'>Notifications Settings</h4>
            <div className='round-cornors'>
            <Checkbox >Promotions, course recommendations, and helpful resources from Noble Spiritz.</Checkbox>
            <Checkbox >Announcements from instructors whose course(s) I’m enrolled in.
              <br/><small>To adjust this preference by course, leave this box checked and go to the  course dashboard and click on "Options" to opt in or out of specific announcements.
</small>
            </Checkbox>
            <Checkbox >Don't send me any promotional emails.
            <br/><small>If this box is checked, please note that you will continue to receive important transactional emails like purchase receipts.</small>
            </Checkbox>
            </div>
          </Col>
          <Col span={24} >
            <h4 className='mt-20'>Message Settings</h4>
            <div className='round-cornors'>
            <Checkbox >Turn off direct messaging
              <br/><small>When you turn off direct messages, you will no longer be able to send or receive direct messages as an instructor.</small>
            </Checkbox>
            </div>
          </Col>
        </Row>
      </Form>

    </>
  )
}

export default Settings