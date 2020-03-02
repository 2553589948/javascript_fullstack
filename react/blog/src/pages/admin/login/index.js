import React from 'react'
import {Form, Input, Button, Card, Message} from 'antd'
import Particles from 'reactparticles.js'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './style.less'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      username: '',
      password: ''
    }
  }

  onSubmit = (e) => {
    console.log('登录成功')
    sessionStorage.setItem('blogUser', 'kyle')
    sessionStorage.setItem('menuItemKey', '0')
    this.props.history.push('/web/index')
  }

  render() {
    return (
      <div className="login">
        <Particles id="particles1" config="./particles1.json" height="90%" />
        <Card className="login-form" style={{width: 300, borderRadius: 4}}>
          <Form onFinish={this.onSubmit}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input placeholder="请输入用户名" prefix={<UserOutlined style={{color: 'rgba(0, 0, 0, .25)'}} />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password placeholder="请输入密码" prefix={<LockOutlined style={{color: 'rgba(0, 0, 0, .25)'}} />} />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>Login</Button>
          </Form>
        </Card>
      </div>
    )
  }
}

export default Login
