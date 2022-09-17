import React from 'react'
import { Select } from 'antd';
import {MailOutlined, MessageOutlined} from '@ant-design/icons';
import './index.css'

const UserItem = () => {
    return (
        <div className='user-tile round-cornors'>
            <div className='v-center'>
                <img src={require('../../images/user.png')} />
            </div>
            <div>
                <h4>Lee Nonmi</h4>
                <p className='class-name'>Tracy. CA. USA</p>
                <p className='class-time'> React, Angular, Dotnet, c++</p>
                <div className='communication'>
                <MailOutlined /> <MessageOutlined />
                </div>
            </div>
        </div>
    )
}

export default UserItem