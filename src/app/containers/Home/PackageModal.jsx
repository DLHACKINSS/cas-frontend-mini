import { Divider, Modal, Row, Typography } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from 'utils/formatPrice';
import { selectAccount } from '../Auth/selectors';
import { selectRegion } from '../Orders/selectors';
import { actions } from '../Orders/slice';
import { Region } from './data.source';

const { Text, Title } = Typography;
export default function PackageModal(props) {
  const region = useSelector(selectRegion);
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const products = props.data.products ? props.data.products : [];
  const handleOk = () => {
    setConfirmLoading(true);
    const data = {
      customer: { id: account.id },
      service_type: 'COMPUTE',
      pmt_type: 'COD',
      price: props.data.price,
      duration: props.data.duration,
      order_type: props.type.toUpperCase(),
      quantity: 1,
      region_id: region,
      items: [
        {
          products: [
            ...products,
            {
              id: 8,
              name: 'OS',
              quantity: 1,
              is_base: true,
              unit: 'License',
              description: props.data.os,
            },
          ],
        },
      ],
    };
    dispatch(actions.setData(data));
    dispatch(actions.createOrder());
    setTimeout(() => {
      props.setShow();
      setConfirmLoading(false);
    }, 500);
  };

  return (
    <Modal
      title={props.title}
      visible={props.show}
      confirmLoading={confirmLoading}
      onOk={handleOk}
      onCancel={() => props.setShow()}
    >
      {products.map((item, idx) => (
        <Row justify="space-between" key={idx}>
          <Text>{item.name.toUpperCase()}:</Text>
          <Text strong>
            {item.quantity} {item.unit}&nbsp;
            {item.description ? (
              <Typography.Text>({item.description})</Typography.Text>
            ) : (
              ''
            )}
          </Text>
        </Row>
      ))}
      <Row justify="space-between">
        <Text>OS:</Text>
        <Text strong>{props.data.os}</Text>
      </Row>
      <Row justify="space-between">
        <Text>Thời hạn:</Text>
        <Text strong>{props.data.duration} tháng</Text>
      </Row>
      <Divider></Divider>
      <Row justify="space-between">
        <Text>Khu vực:</Text>
        <Text strong>{Region[region]}</Text>
      </Row>
      <Row justify="space-between">
        <Text>Ngày tạo:</Text>
        <Text strong>{moment().format('DD/MM/YYYY')}</Text>
      </Row>
      <Row justify="space-between">
        <Text>Hình thức:</Text>
        <Text strong>{props.type}</Text>
      </Row>
      <Divider></Divider>
      <Row justify="space-between">
        <Text>Thành tiền:</Text>
        <Text strong>
          <Title level={2} type="warning">
            {formatPrice(props.price)} VND
          </Title>
        </Text>
      </Row>
    </Modal>
  );
}
