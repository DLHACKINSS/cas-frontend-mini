import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  Checkbox,
  Form,
  Image,
  Input,
  notification,
  Row,
  Space,
  Typography,
} from 'antd';
import logo from 'assets/img/logo/logo_2017.svg';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import {} from 'utils/pattern';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';
import { selectAccount, selectError, selectLoading } from './selectors';
import { actions, reducer, sliceKey } from './slice';

const { Text } = Typography;

export default function SignIn() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });

  const dispatch = useDispatch();
  const history = useHistory();

  const account = useSelector(selectAccount);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const onFinish = values => {
    const { user_name, password } = values;
    const data = { user_name, password };
    dispatch(actions.setData(data));
    dispatch(actions.loadAccount());
  };

  //Reset Error
  useEffect(() => {
    dispatch(actions.setError(null));
  }, [dispatch]);

  useEffect(() => {
    if (account) {
      localStorage.setItem('account', JSON.stringify(account));
      notification.success({
        message: `Signin Success`,
        description: `Welcome ${account.user_name} back`,
        placement: 'bottomRight',
        duration: 6,
      });
      setTimeout(() => history.push('/'), 1000);
    }
  }, [account]);

  return localStorage.account ? (
    <Redirect to="/"></Redirect>
  ) : (
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
        <Typography.Title level={2}>Sign In</Typography.Title>
      </Row>
      <Row justify="center">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ maxWidth: '21rem', width: '100%' }}
        >
          <Form.Item
            name="user_name"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username or Email"
              size="large"
              autoFocus
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Row justify="space-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              {/* <NavLink to="/forgot-password">Forgot Password</NavLink> */}
              <a href="http://portal.azunce.xyz">Forgot Password</a>
            </Row>
          </Form.Item>
          {error && (
            <Row style={{ marginBottom: 4 }}>
              <Text type="danger">{`Error: ${error}`}</Text>
            </Row>
          )}
          <Form.Item>
            <Button
              size="large"
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
              block
            >
              Sign In
            </Button>
            Or <NavLink to="/sign-up">Register now!</NavLink>
          </Form.Item>
        </Form>
      </Row>
    </Space>
  );
}
