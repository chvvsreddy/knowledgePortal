import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Row, Col, Form, Input, Divider, Button } from "antd";
import Cookies from 'js-cookie'
import { CgProfile } from 'react-icons/cg'
import { FcGoogle } from 'react-icons/fc'
import { RiMicrosoftFill } from 'react-icons/ri'
import {UserOutlined} from '@ant-design/icons';
import { DiApple } from 'react-icons/di'
import { IconContext } from 'react-icons'
import './index.css'

const Login = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // set username
    const onChangeUserName = (e: any) => {
        setUsername(e.target.value)
    }

    // set password
    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }




    // on submit success 
    const onSubmitSuccess = (jwtToken: string) => {
        Cookies.set('jwt_token', jwtToken, {
            expires: 30,
        })

        navigate('/login')
    }

    // on submit failure 
    const onSubmitFailure = (error: string) => {
        console.log('error')
    }


    const onSubmitForm = async (event: any) => {
        event.preventDefault();
        const userDetails = {
            "email": username,
            "phone_no": password
        }
        const url = ''
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userDetails),
        }

        const response = await fetch(url, options)

        const data = await response.json()
        if (response.ok === true) {
            onSubmitSuccess(data.cookie)
            //console.log(data.cookie.split(0))
        } else {
            onSubmitFailure(data.error_msg)
        }
    }
    return (
        <Row gutter={0} className='login-container'>
            <Col span={17}>
            </Col>
            <Col span={7}>
                <div className='login-form round-cornors'>
                    <h2><UserOutlined /> Login</h2>
                    <Divider />
                    <Form layout="horizontal" onFinish={onSubmitForm} >
                        <Form.Item>
                            <Input type="text" value={username} placeholder='Enter Email' onChange={onChangeUserName} />
                        </Form.Item>
                        <Form.Item>
                            <Input type="password" value={password} placeholder='Enter MobileNo' onChange={onChangePassword} />
                            <div className="mt-10"><a href="/login">Forgot password?</a></div>
                        </Form.Item>
                       <a href="/Mycourses">
                        <Button type='primary' className='login-button' shape="round" size="large">Login</Button>
                        </a>
                    </Form>
                    <Divider>OR</Divider>
                    <div className="text-center mb-40">
                        <div className='bottom-container'>
                            <IconContext.Provider value={{ className: "google-icon" }}>
                                <FcGoogle />
                            </IconContext.Provider>
                        </div>
                        <div className='bottom-container'>
                            <IconContext.Provider value={{ className: "google-icon" }}>
                                <RiMicrosoftFill />
                            </IconContext.Provider>
                        </div>
                        <div className='bottom-container'>
                            <IconContext.Provider value={{ className: "google-icon" }}>
                                <DiApple />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <Row>
                        <Col span={24} className="text-center"><p >No account <a href="/Signup">Signup</a></p></Col>
                    </Row>
                    <div>
                        <p className='privacy text-center'> <a href="">Privacy Policy</a> | <a href="">Terms and Conditions</a></p>
                    </div>
                </div>
            </Col>
        </Row>


    )

}
export default Login