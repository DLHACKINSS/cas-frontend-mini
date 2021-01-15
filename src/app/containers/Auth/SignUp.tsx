import {
  IdcardOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
} from '@ant-design/icons';
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
import { NavLink, useHistory } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { authSaga } from './saga';
import { selectError, selectLoading, selectSignup } from './selectors';
import { actions, reducer, sliceKey } from './slice';
import empty from 'is-empty';

const { Text } = Typography;

export default function SignUp() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authSaga });

  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector(selectLoading);
  const signup = useSelector(selectSignup);
  const error = useSelector(selectError);

  const [form] = Form.useForm();

  const onFinish = values => {
    const { user_name, full_name, email, password } = values;
    const data = { user_name, full_name, email, password };
    dispatch(actions.setData(data));
    dispatch(actions.loadSignup());
  };

  //Reset
  useEffect(() => {
    dispatch(actions.setError(null));
    dispatch(actions.setSignup(null));
  }, [dispatch]);

  useEffect(() => {
    let timeoutID;
    if (signup) {
      notification.success({
        message: `${signup?.user_name} register succeeded`,
        description: `Sign in to ${signup?.email} to verify account ${signup?.user_name}.`,
        placement: 'bottomRight',
        duration: 6,
      });
      timeoutID = setTimeout(() => {
        history.push('/');
        dispatch(actions.setSignup(null));
      }, 3000);
    }

    return () => clearTimeout(timeoutID);
  }, [signup, dispatch, history]);

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
        <Typography.Title level={2}>Sign Up</Typography.Title>
      </Row>
      <Row justify="center">
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          style={{ maxWidth: '21rem', width: '100%' }}
          initialValues={{
            prefix: '86',
          }}
        >
          <Form.Item
            name="user_name"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
              autoFocus
            />
          </Form.Item>
          <Form.Item
            name="full_name"
            rules={[{ required: true, message: 'Please input your Fullname!' }]}
          >
            <Input
              prefix={<IdcardOutlined className="site-form-item-icon" />}
              placeholder="Fullname"
              size="large"
            />
          </Form.Item>
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
              placeholder="Email"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: 'Please input your phone number!' },
            ]}
          >
            <Input
              size="large"
              placeholder="Phone Number"
              prefix={<PhoneOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              size="large"
              placeholder="Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The two passwords that you entered do not match!',
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Confirm Password"
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject('Should accept agreement'),
              },
            ]}
          >
            <Checkbox>
              I have read the <a href="/">agreement</a>
            </Checkbox>
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
              loading={loading}
              block
            >
              Sign Up
            </Button>
            Or <NavLink to="/sign-in">Sign In Now!</NavLink>
          </Form.Item>
        </Form>
      </Row>
    </Space>
  );
}
