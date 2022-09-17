import { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { Layout, Menu, Row, Col, Input, Button, Switch } from 'antd';

import 'antd/dist/antd.min.css';
import './index.css'
import logo from './src/images/noble_spiritz.png';


const { Search } = Input;
const { Header, Content, Footer } = Layout;
const items = [
    {
        label: 'Online Courses',
        key: 'OnlineCourses',
        path: '/OnlineCourses'
    },
    {
        label: 'Online Classes',
        key: 'OnlineClasses',
        path: '/OnlineClasses'
    },
    {
        label: 'Requested Courses',
        key: 'RequestedCourses',
        path: '/RequestedCourses'
    },
    {
        label: 'Requested Classes',
        key: 'RequestedClasses',
        path: '/RequestedClasses'
    }
];

const userMenu = (
    <Menu
        items={[
            {
                key: '1',
                label: (
                    <a rel="noopener noreferrer" href="/profile">
                        My Profile
                    </a>
                ),
            },
            {
                key: '1',
                label: (
                    <a rel="noopener noreferrer" href="/">
                        Signout
                    </a>
                ),
            }

        ]}
    />
);

const MainLayout = (props: any) => {
    const onSearch = (value: string) => console.log(value);
    const [size, setSize] = useState('large');
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

    const navigate = useNavigate();
    const [current, setCurrent] = useState('login');
    const onClick = (e: any) => {
        console.log('click ', e);
        setCurrent(e.key);
        navigate('/' + e.key);
    };
    return (
        <>
            <Layout className="layout">
                <Header className="header">
                    <div className='inner-container'>
                        <Row gutter={24} className="top-head">
                            <Col span={6} className="logo">
                                <img src={require('../../images/noble_spiritz.png')} />
                            </Col>
                            <Col span={18} className="align-right align-middle">
                                <Search placeholder="input search text" onSearch={onSearch} />
                                <Button.Group >
                                    <Button value="large">A+</Button>
                                    <Button value="default">A</Button>
                                    <Button value="small">A-</Button>
                                </Button.Group>
                                <Switch onChange={onChange} />
                                <a href='/login'><Button type="primary" shape="round"  >Login/Signup</Button></a>
                            </Col>
                        </Row>
                    </div>
                    <div className='top-nav'>
                        <div className='inner-container'>
                            <Menu className="menu" onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} >
                            </Menu>
                        </div>
                    </div>
                </Header>
                <Content>
                    <div className='inner-container'>
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ position: "sticky", bottom: "0" }}>
                    Footer content goes here!!
                </Footer>
            </Layout>
        </>)
}

export default MainLayout;
