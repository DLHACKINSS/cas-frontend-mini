import { Col, Menu, Row } from 'antd';
import { usersSaga } from 'app/containers/Users/saga';
import { reducer, sliceKey } from 'app/containers/Users/slice';
import UserDetail from 'app/containers/Users/UserDetail';
import React, { useState } from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import ChangePassword from './ChangePassword';
import './style.less';

export default function Profile() {
  const [current, setCurrent]: any = useState('update-profile');
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: usersSaga });

  const renderContent = () => {
    if (current === 'update-profile') return <UserDetail />;
    else if (current === 'change-security') return <ChangePassword />;
  };

  return (
    <div className="profile">
      <Menu
        onClick={value => setCurrent(value.key)}
        selectedKeys={[current]}
        style={{
          background: 'transparent',
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
        }}
        mode="horizontal"
      >
        <Menu.Item key="update-profile">Update Profile</Menu.Item>
        <Menu.Item key="change-security">Change Password</Menu.Item>
      </Menu>
      <div className="profile--form">
        <Row>
          <Col span={12} push={6}>
            {renderContent()}
          </Col>
        </Row>
      </div>
    </div>
  );
}
