import {
  EllipsisOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Dropdown, Skeleton, Tooltip } from 'antd';
import { actions } from 'app/containers/Auth/slice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccount } from '../Auth/selectors';

const { Meta } = Card;

function AvatarUser() {
  const dispatch = useDispatch();

  const account = useSelector(selectAccount);

  const handleLogout = () => {
    localStorage.clear();
    dispatch(actions.setAccount(null));
    window.location.href = '/';
  };
  const userInfo = (
    <>
      <Card
        style={{ width: 300 }}
        actions={[
          <Tooltip placement="bottom" title="Setting">
            <a href="/profile">
              <SettingOutlined key="setting" style={{ fontSize: 16 }} />
            </a>
          </Tooltip>,
          <Tooltip placement="bottom" title="Logout">
            <LogoutOutlined key="signout" onClick={() => handleLogout()} />
          </Tooltip>,
          <Tooltip placement="bottom" title="More">
            <EllipsisOutlined key="ellipsis" />
          </Tooltip>,
        ]}
      >
        <Skeleton loading={false} avatar active>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={account?.user_name}
            description={account?.email}
          />
        </Skeleton>
      </Card>
    </>
  );
  return (
    <Dropdown arrow={true} overlay={userInfo} trigger={['click']}>
      <Avatar
        size="large"
        icon={<UserOutlined style={{ fontSize: '1.5rem' }} />}
        style={{ backgroundColor: '#24B24B' }}
      />
    </Dropdown>
  );
}

export default AvatarUser;
