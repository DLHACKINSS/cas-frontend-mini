import { Button, Col, Divider, Row, Select, Space, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { formatPrice } from 'utils/formatPrice';
import { selectAccount } from '../Auth/selectors';
import { selectRegion } from '../Orders/selectors';
import { actions } from '../Orders/slice';
import CustomSlider from './CustomSlider';
import {
  Content4Products,
  CustomPackage,
  PackageDuration,
  PackageOS,
  Region,
} from './data.source';
import Effect from './Effect';
import PackageModal from './PackageModal.jsx';

const { Text } = Typography;
export default function Content4(props) {
  const user = useSelector(selectAccount);
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);
  const [data, setData] = useState({
    cpu: 0,
    memory: 0,
    disk: 0,
    snapshot: 0,
    backup: 0,
    os: 'OS 1',
    duration: 1,
  });
  const getData = (value, name) =>
    setData({ ...data, [name.toLowerCase()]: value });
  const children = () => (
    <Row key="row">
      <Col span={12} key="col">
        {CustomPackage.map((input, idx) => (
          <Row key={idx}>
            <CustomSlider
              getData={(value, name) => getData(value, name)}
              prefix={input.prefix}
              suffix={input.suffix}
              max={input.max}
              step={input.step}
            ></CustomSlider>
          </Row>
        ))}
        <Row align="middle" gutter={[0, 24]}>
          <Col span={5}>SYSTEM</Col>
          <Col span={12}>
            <Select
              showSearch
              style={{ width: '100%' }}
              optionFilterProp="children"
              defaultValue={PackageOS[0]}
              onChange={value => setData({ ...data, os: value })}
              filterOption={(input, option: any) =>
                option.children
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {PackageOS.map((item, idx) => (
                <Select.Option value={item} key={idx}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row align="middle" gutter={[0, 24]}>
          <Col span={5}>Thời hạn</Col>
          <Col span={12}>
            <Select
              showSearch
              style={{ width: '100%' }}
              optionFilterProp="children"
              defaultValue={PackageDuration[0]}
              onChange={value => setData({ ...data, duration: value })}
              filterOption={(input, option: any) =>
                option.children
                  .toString()
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              }
            >
              {PackageDuration.map((item, idx) => (
                <Select.Option value={item} key={idx}>
                  {item}&nbsp;tháng
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={5}>Khu vực</Col>
          <Col span={12}>
            <Select
              value={Region[region]}
              style={{ width: '5rem' }}
              onChange={value => dispatch(actions.setRegion(value))}
            >
              {Region.map((item, idx) => (
                <Select.Option value={idx} key={idx}>
                  {item}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>
      </Col>
      <Col span={1}></Col>
      <Col span={11}>
        <Row justify="center">
          {user ? (
            <Title type="warning" level={2}>
              Gói tùy chỉnh của bạn
            </Title>
          ) : (
            <Title type="warning" level={2}>
              Đăng nhập
            </Title>
          )}
        </Row>
        {user ? (
          <>
            <DisplayPrice data={data} />
          </>
        ) : (
          <Button shape="round" block={true} type="primary">
            <NavLink to="sign-in">
              <b>SIGN IN TO GET PRICE OF CUSTOM PACKAGE</b>
            </NavLink>
          </Button>
        )}
      </Col>
    </Row>
  );

  return (
    <div className="home-page-wrapper content4-wrapper" id="custom_package">
      <div className="home-page">
        <div className="title-wrapper">
          <Typography.Title>Gói Tùy Chỉnh</Typography.Title>
        </div>
        <Effect>{children()}</Effect>
      </div>
    </div>
  );
}

function DisplayPrice(props) {
  const [price, setPrice] = useState(0);
  const [show, setShow] = useState(false);
  const [type, setType] = useState('Trial');
  const [data, setData] = useState({});
  const showModal = input => {
    setData({
      products: [
        { ...Content4Products[0], quantity: props.data.cpu },
        { ...Content4Products[1], quantity: props.data.memory },
        { ...Content4Products[2], quantity: props.data.disk },
        { ...Content4Products[3], quantity: props.data.snapshot },
        { ...Content4Products[4], quantity: props.data.backup },
      ],
      os: props.data.os,
      duration: props.data.duration,
    });
    setType(input);
    setShow(true);
  };
  useEffect(() => {
    setPrice(
      props.data.cpu +
        props.data.memory +
        props.data.disk +
        props.data.snapshot +
        props.data.backup,
    );
  });
  return (
    <>
      <Col span={15} push={4}>
        {Object.keys(props.data).map((item, idx) => (
          <Row justify="space-between" key={idx}>
            <Text type="success">{item.toUpperCase()}:</Text>
            <Text type="success" strong>
              {props.data[item]}{' '}
              {typeof props.data[item] === 'number'
                ? item === 'cpu'
                  ? 'vCPU'
                  : 'GB'
                : ''}
            </Text>
          </Row>
        ))}
        <Divider></Divider>
        <Row justify="space-between" align="top" gutter={[0, 24]}>
          <Text type="success" style={{ margin: 'auto 0' }}>
            PRICE:
          </Text>
          <Title level={2} style={{ marginTop: 0 }}>
            <Text strong type="warning">
              {formatPrice(price)} VND
            </Text>
          </Title>
        </Row>
      </Col>
      <PackageModal
        show={show}
        data={data}
        price={price}
        type={type}
        setShow={() => setShow(false)}
        title="Custom Package"
      />

      <Row justify="center" gutter={[0, 24]}>
        <Space size={24}>
          <Button
            shape="round"
            onClick={() => showModal('Buy')}
            type="primary"
            style={{ width: '6rem' }}
            disabled={price > 0 ? false : true}
          >
            Buy now
          </Button>
          <Button
            shape="round"
            onClick={() => showModal('Trial')}
            style={{ width: '6rem' }}
            disabled={price > 0 ? false : true}
          >
            Trial
          </Button>
        </Space>
      </Row>
      <Row justify="center">
        <Text type="secondary">
          * Liên hệ số hotline XXXX.XXXX nếu bạn có nhu cầu đặc biệt.
        </Text>
      </Row>
    </>
  );
}
