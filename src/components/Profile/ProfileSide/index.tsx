import React from 'react'
import { Row, Col, Button, Select } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import './index.css'
import MessageItem from '../../Messages/MessageItem';
import CircleItem from '../../Circles/CircleItem';

const { Option } = Select;
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
function ProfileSide() {
  return (
    <div className='user-side mt-20'>

      <div className='user-block'>
        <img src={require('../../../images/user.png')} />
        <p>Jim benjamin<br /><span>writer</span></p>
        <Button shape="round">Switch to Instructor</Button>
        {/* <Button shape="round">Edit Profile</Button> */}
      </div>
      <h4>Upcoming Classes
        <Select defaultValue="Today" className='events-select' onChange={handleChange}>
          <Option value="Today">Today</Option>
          <Option value="Next 7 days">Next 7 days</Option>
          <Option value="Next 15 days">Next 15 days</Option>
        </Select>
      </h4>
      <div className='class-event'>
        <div className='v-center'><CalendarOutlined /></div>
        <div>
          <p className='class-name'>React beginer class</p>
          <p className='class-time'>10AM - 11AM</p>
        </div>
      </div>
      <div className='class-event'>
        <div className='v-center'><CalendarOutlined /></div>
        <div>
          <p className='class-name'>HTML, CSS course</p>
          <p className='class-time'>3PM - 4PM</p>
        </div>
      </div>

      <div className='circle-block'>
        <h4 className='mt-20'>Circles</h4>
        <CircleItem /><CircleItem /><CircleItem /><CircleItem />
      </div>
      <h4 className='mt-0'>Messages<span className='count'>12</span></h4>
      <MessageItem />
      <MessageItem />   
    </div>
  )
}

export default ProfileSide