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
    const data = { price: props.price };
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
      <Row justify="space-between">
        <Text>Ngày tạo:</Text>
        <Text strong>{moment().format('DD/MM/YYYY')}</Text>
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
