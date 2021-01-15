import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  notification,
  Row,
  Select,
} from 'antd';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { selectAccount } from '../Auth/selectors';
import { Active, Gender, Message } from './constants';
import {
  selectError,
  selectLoading,
  selectNotice,
  selectUser,
} from './selectors';
import { actions } from './slice';

export default function UserDetail() {
  const account = useSelector(selectAccount);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const params: any = useParams();
  const history = useHistory();
  const user = useSelector(selectUser);
  const username = params.username ? params.username : account.user_name;
  const [form]: any = Form.useForm();
  const notice = useSelector(selectNotice);
  const error = useSelector(selectError);
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
  };
  const onFinish = value => {
    console.log(value);
    delete value.user_name;
    delete value.email;
    const data = { data: value, userId: user.id };
    dispatch(actions.setData(data));
    dispatch(actions.updateUser());
  };
  useEffect(() => {
    if (!user || (user && username !== user.user_name)) {
      dispatch(actions.setQuery(username));
      dispatch(actions.queryUser());
    }
  }, []);
  useEffect(() => {
    if (user)
      form.setFieldsValue({
        ...user,
        birthday: user.birthday ? moment(user.birthday, 'YYYY-MM-DD') : null,
      });
  }, [user]);
  useEffect(() => {
    if (notice || error) {
      const status = notice ? 'success' : 'error';
      notification[status]({
        message: notice ? notice : error,
        placement: 'bottomRight',
        duration: 5,
      });
      if (error === Message.ACTION_NOT_ALLOW) history.push('/dashboard/users');
    }
  });
  return user ? (
    <>
      <Form
        form={form}
        name="infoUser"
        layout="horizontal"
        labelAlign="left"
        onFinish={onFinish}
        {...layout}
      >
        <Card
          title="Thông tin tài khoản"
          bordered={false}
          style={{ height: '100%', minHeight: '67vh' }}
        >
          {params.username ? (
            <Form.Item
              name="status"
              label={<span>Active</span>}
              wrapperCol={{ span: 4 }}
            >
              <Select>
                {Active.map((item, idx) => (
                  <Select.Option value={item} key={idx}>
                    {item}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          ) : (
            <></>
          )}
          <Form.Item
            name="full_name"
            label={<span>Tên đầy đủ</span>}
            rules={[
              {
                required: true,
                message: 'Phải nhập tên!',
              },
            ]}
          >
            <Input placeholder="Tên đầy đủ" />
          </Form.Item>
          <Form.Item name="user_name" label={<span>Tên tài khoản</span>}>
            <Input placeholder="Tên tài khoản" disabled />
          </Form.Item>
          <Row>
            <Col span={16}>
              <Form.Item
                labelCol={{ span: 9 }}
                name="birthday"
                label="Ngày sinh"
                rules={[
                  {
                    type: 'object',
                    required: true,
                    message: 'Phải chọn ngày sinh!',
                  },
                ]}
              >
                <DatePicker format="DD-MM-YYYY" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="gender"
                label={<span>Giới tính</span>}
                labelCol={{ span: 8 }}
              >
                <Select>
                  {Gender.map((item, idx) => (
                    <Select.Option value={item} key={idx}>
                      {item.toLowerCase()}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="address"
            label={<span>Địa chỉ</span>}
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Phải nhập địa chỉ',
              },
            ]}
          >
            <Input placeholder="Địa chỉ" />
          </Form.Item>
          <Form.Item
            name="phone_num"
            label={<span>Số điện thoại</span>}
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Số diện thoại phải theo định dạng 0123456789',
              },
            ]}
          >
            <Input placeholder="0123456789" type="number" />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Email phải theo định dạng abc@xyz.bbb',
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="id_no"
            label={
              user.user_type === 'COMPANY' ? (
                <span>Mã số thuế</span>
              ) : (
                <span>ID</span>
              )
            }
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'ID phải theo định dạng "0123456789"',
              },
            ]}
          >
            <Input placeholder="0123456789" type="number" />
          </Form.Item>

          {user.user_type === 'COMPANY' ? (
            <>
              <Form.Item
                name="repName"
                label={<span>Người đại diện</span>}
                rules={[
                  {
                    required: true,
                    message: 'Phải nhập tên!',
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Tên Người đại diện" />
              </Form.Item>
              <Row>
                <Col span={6}></Col>
                <Col span={18}>
                  <Form.Item
                    name="repPhonenum"
                    label={<span>Điện thoại</span>}
                    rules={[
                      {
                        required: true,
                        message: 'Số diện thoại phải theo định dạng 0123456789',
                      },
                    ]}
                  >
                    <Input type="number" placeholder="0123456789" />
                  </Form.Item>
                </Col>
                <Col span={18} push={6}>
                  <Form.Item
                    name="repEmail"
                    label="E-mail"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Email phải theo định dạng abc@xyz.bbb',
                      },
                    ]}
                  >
                    <Input placeholder="abc@xyz.bbb" />
                  </Form.Item>
                </Col>
              </Row>
            </>
          ) : (
            <></>
          )}
          <Form.Item
            name="ref_name"
            label={<span>Người liên hệ</span>}
            rules={[
              {
                required: true,
                message: 'Phải nhập tên',
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Tên Người liên hệ" />
          </Form.Item>
          <Row>
            <Col span={6}></Col>
            <Col span={18}>
              <Form.Item
                name="ref_phone"
                label={<span>Điện thoại</span>}
                rules={[
                  {
                    required: true,
                    message: 'Số diện thoại phải theo định dạng 0123456789',
                  },
                ]}
              >
                <Input type="number" placeholder="0123456789" />
              </Form.Item>
            </Col>
            <Col span={18} push={6}>
              <Form.Item
                name="ref_email"
                label="E-mail"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Email phải theo định dạng abc@xyz.bbb',
                  },
                ]}
              >
                <Input placeholder="abc@xyz.bbb" />
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center" style={{ marginTop: '1rem' }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
          </Row>
        </Card>
      </Form>
    </>
  ) : (
    <></>
  );
}
