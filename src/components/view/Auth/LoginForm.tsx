'use client'
import React from 'react';
import {useRouter} from 'next/navigation'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const router = useRouter()
  const onFinish =async (values: any) => {
  const result = await signIn('doctor-portal-backend',{
    email:values.email,
    password:values.password,
    callbackUrl:'/'
  }
  )
console.log(result)
if(result?.ok && !result.error){
  router.push('/')
}
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish} 
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input type='email' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="">register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;