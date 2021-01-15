import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoadingOutlined,
} from '@ant-design/icons';
import { Col, DatePicker, Form, Input, Radio, Row, Select, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

const { Option } = Select;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const selectorIdentifi = (
  <Form.Item initialValue="cmnd" name="identification" noStyle>
    <Select style={{ width: 100 }}>
      <Option value="cmnd">CMND</Option>
      <Option value="cancuoc">Căn cước</Option>
      <Option value="hochieu">Hộ chiếu</Option>
    </Select>
  </Form.Item>
);

interface Props {
  mode: string;
  handleBlurUsername?: any;
  loading?: boolean;
  userType?: string;
}

export default function UserFormBase({
  mode,
  handleBlurUsername,
  loading,
  userType,
}: Props) {
  const [customerType, setCustomerType] = useState('PERSONAL');

  useEffect(() => {
    if (userType) {
      setCustomerType(userType);
    } else {
      setCustomerType('PERSONAL');
    }
  }, [userType]);

  const personal = (
    <>
      <Form.Item
        name="full_name"
        label={<span>Họ Tên</span>}
        rules={[
          {
            required: true,
            message: 'Please input name!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Họ Tên" />
      </Form.Item>
      <Form.Item
        name="id_no"
        label="ID"
        rules={[{ required: true, message: 'Please input id!' }]}
      >
        <Input
          type="number"
          addonBefore={selectorIdentifi}
          style={{ width: '100%' }}
          placeholder="0123456789"
        />
      </Form.Item>
      <Row>
        <Col span={mode === 'edit' ? 2 : 6}></Col>
        <Col span={9}>
          <Form.Item
            labelCol={{ span: 7 }}
            name="id_created_at"
            label="Ngày cấp"
            rules={[
              {
                type: 'object',
                required: true,
                message: 'Please select time!',
              },
            ]}
          >
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>
        </Col>
        <Col span={9}>
          <Form.Item
            name="id_location"
            label={<span>Nơi Cấp</span>}
            rules={[
              {
                required: true,
                message: 'Please input place!',
                whitespace: true,
              },
            ]}
          >
            <Input placeholder="Nơi Cấp" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        name="phone_num"
        label={<span>Điện thoại</span>}
        rules={[
          {
            required: true,
            message: 'Please input place!',
            whitespace: true,
          },
        ]}
      >
        <Input type="number" placeholder="0123456789" />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
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
        <Input disabled={mode !== 'create'} placeholder="abc@xyz.bbb" />
      </Form.Item>
      <Form.Item
        name="address"
        label={<span>Địa chỉ</span>}
        rules={[
          {
            required: true,
            message: 'Please input address!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Địa Chỉ" />
      </Form.Item>
      <Form.Item
        name="ref_name"
        label={<span>Người liên hệ</span>}
        rules={[
          {
            required: true,
            message: 'Please input place!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Tên Người liên hệ" />
      </Form.Item>
      <Row>
        <Col span={mode === 'edit' ? 2 : 6}></Col>
        <Col span={18}>
          <Form.Item name="ref_phone" label={<span>Điện thoại</span>}>
            <Input type="number" placeholder="0123456789" />
          </Form.Item>
        </Col>
        <Col span={18} push={mode === 'edit' ? 2 : 6}>
          <Form.Item
            name="ref_email"
            label="E-mail"
            rules={[
              {
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
  );

  const company = (
    <>
      <Form.Item
        name="full_name"
        label={<span>Tên công ty</span>}
        rules={[
          {
            required: true,
            message: 'Please input name!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Tên Công ty" />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
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
        <Input disabled={mode !== 'create'} placeholder="abc@xyz.bbb" />
      </Form.Item>
      <Form.Item
        name="address"
        label={<span>Địa chỉ</span>}
        rules={[
          {
            required: true,
            message: 'Please input address!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Địa chỉ Công ty" />
      </Form.Item>
      <Form.Item
        name="tax_no"
        label="Mã số thuế"
        rules={[{ required: true, message: 'Please input id!' }]}
      >
        <Input
          type="number"
          style={{ width: '100%' }}
          placeholder="0123456789"
        />
      </Form.Item>

      <Form.Item
        name="rep_name"
        label={<span>Người đại diện</span>}
        rules={[
          {
            required: true,
            message: 'Please input place!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Tên Người đại diện" />
      </Form.Item>
      <Row>
        <Col span={mode === 'edit' ? 2 : 6}></Col>
        <Col span={18}>
          <Form.Item name="rep_phone" label={<span>Điện thoại</span>}>
            <Input type="number" placeholder="0123456789" />
          </Form.Item>
        </Col>
        <Col span={18} push={mode === 'edit' ? 2 : 6}>
          <Form.Item
            name="rep_email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Email phải theo định dạng abc@xyz.bbb',
              },
            ]}
          >
            <Input placeholder="abc@xyz.bbb" />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="ref_name"
        label={<span>Người liên hệ</span>}
        rules={[
          {
            required: true,
            message: 'Please input place!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="Tên Người liên hệ" />
      </Form.Item>
      <Row>
        <Col span={mode === 'edit' ? 2 : 6}></Col>
        <Col span={18}>
          <Form.Item name="ref_phone" label={<span>Điện thoại</span>}>
            <Input type="number" placeholder="0123456789" />
          </Form.Item>
        </Col>
        <Col span={18} push={mode === 'edit' ? 2 : 6}>
          <Form.Item
            name="ref_email"
            label="E-mail"
            rules={[
              {
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
  );
  return (
    <>
      <Form.Item
        name="user_name"
        label={<span>Tài khoản</span>}
        rules={[
          {
            required: true,
            message: 'Please input account!',
            whitespace: true,
          },
        ]}
      >
        <Input
          placeholder="Tài khoản"
          onBlur={handleBlurUsername}
          suffix={loading ? <Spin indicator={antIcon} /> : null}
        />
      </Form.Item>
      {mode === 'create' && (
        <>
          <Form.Item
            name="password"
            label={<span>Password</span>}
            rules={[
              {
                required: true,
                message: 'Please input password!',
                whitespace: true,
              },
            ]}
          >
            <Input.Password
              placeholder="Password"
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={<span>Confirm Password</span>}
            rules={[
              {
                required: true,
                message: 'Please input password!',
                whitespace: true,
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
              placeholder="Password"
              iconRender={visible =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        </>
      )}
      <Form.Item
        name="account_type"
        initialValue="AGENCY"
        label={<span>Loại tài khoản</span>}
      >
        <Select>
          <Option value="AGENCY">Agency</Option>
          <Option value="EU">EU</Option>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue="PERSONAL"
        name="user_type"
        label={<span>Khách hàng</span>}
      >
        <Radio.Group onChange={event => setCustomerType(event.target.value)}>
          <Radio value="PERSONAL">Cá nhân</Radio>
          <Radio value="COMPANY">Công ty</Radio>
        </Radio.Group>
      </Form.Item>
      {customerType === 'PERSONAL' && personal}
      {customerType === 'COMPANY' && company}
    </>
  );
}
