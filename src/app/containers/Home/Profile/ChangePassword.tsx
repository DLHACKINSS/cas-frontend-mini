import React, { useEffect } from 'react';
import { Card, Form, Input, Row, Button, notification } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectLoading,
  selectNotice,
  selectUser,
} from 'app/containers/Users/selectors';
import { actions } from 'app/containers/Users/slice';

export default function ChangePassword() {
  const loading = useSelector(selectLoading);
  const notice = useSelector(selectNotice);
  const error = useSelector(selectError);
  const user = useSelector(selectUser);

  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const onFinish = value => {
    console.log(value);
    delete value.confirmPassword;
    const data = { data: value, userId: user.id };
    dispatch(actions.setData(data));
    dispatch(actions.updateUser());
  };

  const renderField = input => {
    const target: any = input.target
      ? ({ getFieldValue }) => ({
          validator(rule, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              'The two passwords that you entered do not match!',
            );
          },
        })
      : '';
    return (
      <Form.Item
        name={input.name}
        label={<span>{input.label}</span>}
        rules={[
          {
            required: true,
            message: 'Please input password!',
            whitespace: true,
          },
          target,
        ]}
      >
        <Input.Password
          placeholder="Password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
    );
  };
  useEffect(() => {
    if (notice || error) {
      const status = notice ? 'success' : 'error';
      notification[status]({
        message: notice ? notice : error,
        placement: 'bottomRight',
        duration: 5,
      });
      if (status == 'success') form.resetFields();
      dispatch(actions.setError(null));
      dispatch(actions.setNotice(null));
    }
  });
  return (
    <Form
      name="infoUser"
      layout="horizontal"
      {...layout}
      form={form}
      labelAlign="left"
      onFinish={onFinish}
    >
      <Card
        title="Thay đổi thông tin tài khoản"
        bordered={false}
        style={{ height: '100%', minHeight: '67vh' }}
      >
        {renderField({ name: 'old_password', label: 'Mật khẩu cũ' })}
        {renderField({ name: 'password', label: 'Mật khẩu mới' })}
        {renderField({
          name: 'confirmPassword',
          label: 'Xác nhận mật khẩu',
          target: 'password',
        })}

        <Row justify="center" style={{ marginTop: '1rem' }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Row>
      </Card>
    </Form>
  );
}
