import { LoadingOutlined } from '@ant-design/icons';
import {
  Col,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  Spin,
  Typography,
} from 'antd';
import React from 'react';
import { actions } from 'app/containers/Orders/slice';
import { useDispatch, useSelector } from 'react-redux';
import { selectRegion, selectRegions } from 'app/containers/Orders/selectors';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const { Option } = Select;
const { Text } = Typography;

const selectorMoney = (
  <Form.Item name="money" noStyle>
    <Select style={{ width: 100 }} defaultValue="vnd">
      <Option value="vnd">VND</Option>
      <Option value="usd">USD</Option>
    </Select>
  </Form.Item>
);

interface Props {
  loading?: boolean;
  handleBlurContract?: any;
  mode?: string;
}

export default function ContractFormBase({
  loading,
  handleBlurContract,
  mode,
}: Props) {
  const dispatch = useDispatch();

  const regions = useSelector(selectRegions);
  const region = useSelector(selectRegion);

  const optionRegion = regions.map(region => (
    <Option value={region.id}>{region.description}</Option>
  ));

  const onSelect = value => {
    dispatch(actions.setRegion(value));
  };

  return (
    <>
      <Form.Item
        name="contract_code"
        label={<span>Số hợp đồng</span>}
        rules={[
          {
            required: true,
            message: 'Please input place!',
            whitespace: true,
          },
        ]}
      >
        <Input
          placeholder="Số hợp đồng"
          onBlur={handleBlurContract}
          suffix={loading ? <Spin indicator={antIcon} /> : null}
        />
      </Form.Item>
      <Form.Item
        initialValue={region}
        name="region_id"
        label={<span>Khu vực</span>}
      >
        <Select
          value={region}
          style={{ width: 80 }}
          onSelect={onSelect}
          loading={loading}
        >
          {optionRegion}
        </Select>
      </Form.Item>
      <Form.Item
        initialValue="COMPUTE"
        name="service_type"
        label={<span>Dịch vụ</span>}
      >
        <Select>
          <Option value="COMPUTE">COMPUTE</Option>
          <Option value="VDC">VDC</Option>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue="BUY"
        name="order_type"
        label={<span>Hình thức</span>}
      >
        <Select>
          <Option value="TRIAL">Trial</Option>
          <Option value="BUY">Buy</Option>
        </Select>
      </Form.Item>
      <Form.Item
        initialValue={1}
        name="duration"
        label={<span>Thời gian hợp đồng (tháng)</span>}
      >
        <InputNumber min={0} />
      </Form.Item>
      <Form.Item
        name="start_at"
        label="Ngày bắt đầu"
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
      <Form.Item
        name="end_at"
        label="Ngày kết thúc"
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
      <Form.Item
        name="price"
        label="Giá trị đơn hàng"
        rules={[{ required: true, message: 'Please input value!' }]}
      >
        <Input
          addonBefore={selectorMoney}
          type="number"
          min={0}
          style={{ width: '100%' }}
          placeholder="Giá trị đơn hàng"
        />
      </Form.Item>
      <Form.Item
        initialValue="COD"
        name="pmt_type"
        label={<span>Hình thức thanh toán</span>}
      >
        <Select>
          <Option value="COD">COD</Option>
          <Option value="MONTHLY">Monthly</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="sale_care"
        label={<span>Sale Care</span>}
        rules={[
          {
            type: 'email',
            message: 'Email phải theo định dạng abc@xyz.bbb',
          },
          {
            required: true,
            message: 'Please input value!',
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="abc@xyz.bbb" />
      </Form.Item>
      <Text>Co-Sale:</Text>
      <Row>
        <Col span={mode === 'edit' ? 22 : 24} offset={mode === 'edit' ? 2 : 0}>
          <Form.Item
            labelAlign="right"
            name="department"
            label={<span>Trung tâm</span>}
            rules={[
              {
                required: true,
                message: 'Please input value!',
              },
            ]}
          >
            <Input placeholder="Trung tâm" />
          </Form.Item>
          <Form.Item
            labelAlign="right"
            name="sale"
            label={<span>Email Saler</span>}
            rules={[
              {
                type: 'email',
                message: 'Email phải theo định dạng abc@xyz.bbb',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="abc@xyz.bbb" />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
