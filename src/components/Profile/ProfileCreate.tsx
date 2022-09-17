import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Menu, Button, Input, Select, DatePicker } from 'antd';
import type { DatePickerProps } from 'antd';
import { SettingOutlined, ProfileOutlined, CheckOutlined } from '@ant-design/icons';

import './index.css'
const { Option } = Select;
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
};

const profileMenu = [
    {
        label: 'Profile',
        key: 'Profile',
        path: '/Profile',
        icon: <ProfileOutlined />
    },
    {
        label: 'Settings',
        key: 'Settings',
        path: '/Settings',
        icon: <SettingOutlined />
    }
];

const ProfileCreate = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('login');
    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate('/' + e.key);
    };
    return (
        <> <Form layout="vertical">
            <div className='profile-nav'>
                <div className='inner-container'>
                    <Row className='profile-nav'>
                        <Col span={24}>
                            <Menu className="menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={profileMenu} ></Menu>
                        </Col>

                    </Row>
                </div>
            </div>
            <Row gutter={24}>
                <Col span={18} className="mt-20">
                    <Row gutter={24} className="profile">
                        <Col span={24} className="mb-20">
                            <h2>Join as</h2>
                            <Button value="large" type="primary" shape="round" className='mr-15'><CheckOutlined />Student</Button>
                            <Button shape="round" className='mr-15'>Instructor</Button>
                            <Button shape="round" >Both</Button>
                        </Col>
                        <Col span={24} >
                            <h4>Basic details</h4>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="First name:" name="layout">
                                <Input placeholder="First name" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Last name:" name="layout">
                                <Input placeholder="Last name" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Date of Birth:" name="layout">
                                <DatePicker onChange={onChange} />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Gender:" name="layout">
                                <Select defaultValue="">
                                    <Option value="Male">Male</Option>
                                    <Option value="Female">Female</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Email" name="layout">
                                <Input placeholder="Email" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Phone number:" name="layout">
                                <Input placeholder="Phone number" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={24} className="profile">
                        <Col span={24} >
                            <h4>Location details</h4>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Country :" name="layout">
                                <Input placeholder="Country" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Residing State:" name="layout">
                                <Input placeholder="Residing State" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Residing City:" name="layout">
                                <Input placeholder="Residing City" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Citizenship:" name="layout">
                                <Input placeholder="Citizenship" />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row gutter={24} className="profile">
                        <Col span={24} >
                            <h4>Professional details</h4>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Qualification :" name="layout">
                                <Input placeholder="Qualification" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="University:" name="layout">
                                <Input placeholder="University" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Languages:" name="layout">
                                <Input placeholder="Languages" />
                            </Form.Item>
                        </Col>
                        <Col span={8} >
                            <Form.Item label="Course specilized in" name="layout">
                                <Input placeholder="Course specilized in" />
                            </Form.Item>
                        </Col>

                    </Row>
                </Col>
                <Col span={6}>
                    <div className='user-side mt-20'>
                        <div className='user-block'>
                            <div className="add-img">
                                <img src={require('../../images/user.png')} />
                            </div>
                            <p>Jim benjamin<br /><span>writer</span></p>

                        </div>
                        <h4>Upcoming Classes</h4>
                        <div className="no-data"><p>No data available</p></div>
                        <div className='circle-block'>
                            <h4 className='mt-20'>Circles</h4>
                            <div className="no-data"><p>No data available</p></div>
                        </div>
                        <h4 className='mt-20'>Messages</h4>
                        <div className="no-data"><p>No data available</p></div>
                    </div>
                </Col>
                <Col span={24} >
                    <div className='status-box mb-20'>
                        <Button type="primary" shape="round">Update</Button>
                        
                    </div>
                </Col>
            </Row>

        </Form>
        </>
    )
}

export default ProfileCreate