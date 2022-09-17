import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Col, Row, Form, Menu, Button, Input,Select, DatePicker} from 'antd';
import type { DatePickerProps } from 'antd';
import { SettingOutlined, ProfileOutlined } from '@ant-design/icons';

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

const ProfileEdit = () => {
    const navigate = useNavigate();
    const [current, setCurrent] = useState('login');
    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate('/' + e.key);
    };
    return (
        <> 
        <Form layout="vertical">
        <Row gutter={24} className="profile">
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
        </Form>
        </>
    )
}

export default ProfileEdit