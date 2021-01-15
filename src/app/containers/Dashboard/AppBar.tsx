import { AudioOutlined } from '@ant-design/icons';
import { Col, Row, Select, Space } from 'antd';
import Search from 'antd/lib/input/Search';
import { actions, reducer, sliceKey } from 'app/containers/Orders/slice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ordersSaga } from '../Orders/saga';
import {
  selectLoadingRegions,
  selectRegion,
  selectRegions,
} from '../Orders/selectors';
import AvatarUser from './AvatarUser';
import Notification from './Notification';
import './styles.less';

const { Option } = Select;

export default function AppBar() {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: ordersSaga });

  const dispatch = useDispatch();

  const regions = useSelector(selectRegions);
  const region = useSelector(selectRegion);
  const loading = useSelector(selectLoadingRegions);

  //Search Input Voice
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  useEffect(() => {
    dispatch(actions.getRegions());
  }, [dispatch]);

  //Handle change Region
  const onSelect = value => {
    dispatch(actions.setRegion(value));
  };

  const onSearch = value => console.log(value);

  const optionRegion = regions.map(region => (
    <Option value={region.id}>{region.description}</Option>
  ));

  return (
    <Row justify="space-between" align="middle">
      <Col md={8}>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
          style={{ verticalAlign: 'middle' }}
        />
      </Col>

      <Col style={{ marginRight: 40 }}>
        <Space align="center" size="large">
          <Select
            value={region}
            style={{ width: 80 }}
            onSelect={onSelect}
            loading={loading}
          >
            {optionRegion}
          </Select>
          <Notification />
          <AvatarUser />
        </Space>
      </Col>
    </Row>
  );
}
