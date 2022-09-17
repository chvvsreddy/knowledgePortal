import React from 'react'
import { Row, Col, Button, Input } from "antd"
import MessageItem from './MessageItem'

import './index.css'

function Messages() {
  return (
    <>
      <Row gutter={24}>
        <Col xs={24} lg={8} md={8}>
          <Input placeholder="Search by name or keyword" />
          <h4 className='mt-10'>Today</h4>
          <div className='messages'>
            <MessageItem /><MessageItem />
          </div>
          <h4 className='mt-10'>Yesterday</h4>
          <div className='messages'>
            <MessageItem /><MessageItem />
          </div>
          <h4 className='mt-10'>Last week</h4>
          <div className='messages'>
            <MessageItem /><MessageItem /><MessageItem />
          </div>
        </Col>
        <Col xs={24} lg={16} md={16}>
          <Row gutter={24}>
            <Col span={24}><Button type="primary" shape="round" ghost className='f-right'>Compose</Button>
            </Col>
            <Col span={24}>
              <div className='message-details mt-10'>
                <div className='message-header'><MessageItem /></div>
                <div className='message-content'>
                  <p>Hi!</p>
                  <p>My name is Max and I'm the instructor of the React course you just joined. I'm extremely happy to welcome you on board!
                  </p>
                  <p>React is an amazing library and I can't wait to dive into it together with you. It's my #1 goal to offer you the best-possible learning experience!
                    If you feel like something's unclear or you got a question, please reach out to me via the Q&A section. Me and my team are reading and replying there on a regular basis and we'll do our best to help you as quick as possible.
                  </p>
                  <p><a href=''>Click here to check the tutorial you requested</a></p>
                  <p>Max</p>
                </div>
              </div>
            </Col>
          </Row>

        </Col>
      </Row>

    </>
  )
}

export default Messages