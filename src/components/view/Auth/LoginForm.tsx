'use client'
import React from 'react';
import {useRouter} from 'next/navigation'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const router = useRouter()

  const onFinish =async (values: any) => {
    console.log(values)
  const result = await signIn('doctor-portal-backend',{
    email:values.email,
    password:values.password,
    callbackUrl:'/'
  }
  )

  console.log(result,"result")

if(result?.ok && !result.error){
  router.push('/')
}
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  
  type FieldType = {
    email?: string;
    password?: string;
  };
  return (
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Email"
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input type='email'/>
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password type='password'/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  );
};

export default LoginForm;