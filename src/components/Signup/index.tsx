import {Link,Navigate, useNavigate} from "react-router-dom";
import { useState } from "react";
import {Row, Col, Form, Input, Divider, Checkbox, Button  } from "antd";
import{UserOutlined, GoogleOutlined, TwitterOutlined, FacebookOutlined } from '@ant-design/icons';

import './index.css'



const Signup = () => {

    // const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onChangeUserEmail = (e: any) => {
        setEmail(e.target.value)
    }

    const onChangeMobile = (e: any) => {
        setMobile(e.target.value)
    }



    // set password
    const onChangePassword = (e: any) => {
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e: any) => {
        setConfirmPassword(e.target.value)
    }

    const onSubmitForm = async (event: any) => {
        event.preventDefault();
        const data = {
            password: password, email: email, confirmPassword: confirmPassword, mobile: mobile
        }

        setPassword("")
        setEmail("")
        setConfirmPassword("")
        setMobile("")

    }

    //const jwtToken = Cookies.get('jwt_token')


    return (

        <Row gutter={0} className='login-container'>
            <Col span={17}>
            </Col>
            <Col span={7}>

                <div className='login-form  round-cornors'>
                <h2><UserOutlined /> Signup</h2>
                    <Divider />
                    <Form layout="vertical" onFinish={onSubmitForm} >
                         <Form.Item>
                            <Input type="text" value={email} className="input-text" placeholder='Email' onChange={onChangeUserEmail} />
                        </Form.Item>
                        <Form.Item>
                            <Input type="text" value={mobile} className="input-text" placeholder='Mobile number' onChange={onChangeMobile} />
                        </Form.Item>
                        <Form.Item>
                            <Input type="password" value={password} className="input-text" placeholder='Enter Password' onChange={onChangePassword} />
                        </Form.Item>
                        <Form.Item>
                            <Input type="password" value={confirmPassword} className="input-text" placeholder='Confirm Password' onChange={onChangeConfirmPassword} />
                            <Checkbox className="mt-10">I agree to the Terms and Privacy policy</Checkbox>
                       
                        </Form.Item>
                        <a href="/ProfileCreate">
                        <Button type='primary' className='login-button' shape="round" size="large">Signup</Button> 
                        </a>                  

                    </Form>
                    <Divider />
                    <div className="text-center mb-40">
                        <div className='bottom-container'>
                            <div className="google-icon">
                            <GoogleOutlined />
                            </div>
                        </div>
                        <div className='bottom-container'>
                        <div className="google-icon">
                            <TwitterOutlined />
                            </div>
                        </div>
                        <div className='bottom-container'>
                        <div className="google-icon">
                        <FacebookOutlined />
                            </div>
                        </div>
                    </div>
                    <Row>
                        <Col span={24} className="text-center"><p >Already having account <a href="/login">Login</a></p></Col>
                    </Row>
                    <div >
                        <p className='privacy text-center'> <a href="">Privacy Policy</a> | <a href="">Terms and Conditions</a></p>
                    </div>
                </div>

            </Col>
        </Row>

    )

}
export default Signup