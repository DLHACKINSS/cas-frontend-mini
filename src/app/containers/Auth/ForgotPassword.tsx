import { MailOutlined } from '@ant-design/icons';
import {
  Button,
  Form,
  Image,
  Input,
  notification,
  Row,
  Space,
  Typography,
} from 'antd';
import logo from 'assets/img/logo/logo_2017.svg';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {} from 'utils/pattern';

export default function ForgotPassword(props) {
  const [loading, setLoading] = useState(false);

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  const signIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notification.success({
        message: `Your request has been submitted.`,
        description: 'Sign in to your email to reset your password.',
        placement: 'bottomRight',
      });
    }, 3000);
  };

  return (
    <Space
      direction="vertical"
      size="middle"
      style={{ width: '100%', paddingTop: '2rem' }}
    >
      <Row justify="center">
        <NavLink to="/">
          <Image width={100} src={logo}></Image>
        </NavLink>
      </Row>
      <Row justify="center">
        <Typography.Title level={2}>Forgot Password</Typography.Title>
      </Row>
      <Row justify="center">
        <Form
          name="normal_login"
          className="login-form"
          onFinish={onFinish}
          style={{ maxWidth: '21rem', width: '100%' }}
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Your's account Email"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              loading={loading}
              onClick={signIn}
              className="login-form-button"
              block
            >
              Send Email
            </Button>
            Or <NavLink to="/sign-in">Sign In Now!</NavLink>
          </Form.Item>
        </Form>
      </Row>
    </Space>
  );
}
