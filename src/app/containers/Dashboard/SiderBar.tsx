import { Menu } from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { dashboardRoutes } from '../../routes/route.dashboard';
import logo from '../../../assets/img/logo/logo_2017.svg';
import './styles.less';

const { SubMenu } = Menu;

export default function SiderBar() {
  const history = useHistory();
  const handleClickLink = e => {
    history.push(`/dashboard${e.key}`);
  };
  const handleClickLogo = () => history.push('/');

  const menu = (
    <Menu
      theme="dark"
      mode="inline"
      defaultOpenKeys={['Compute', 'Orders', 'Users']}
      onClick={handleClickLink}
      style={{ width: '100%' }}
    >
      {dashboardRoutes.map(prop => (
        <SubMenu
          key={prop.name}
          icon={prop.icon}
          title={prop.name}
          className="submenu"
        >
          {prop.children.map(chil => (
            <Menu.Item key={`${prop.path}${chil.path}`} icon={chil.icon}>
              {chil.name}
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );

  return (
    <>
      <div className="logo">
        <img src={logo} alt="logo" onClick={handleClickLogo} />
      </div>
      {menu}
    </>
  );
}
