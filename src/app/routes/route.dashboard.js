import {
  CloudServerOutlined,
  FundOutlined,
  HddOutlined,
  KeyOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Landing } from 'app/containers/Home/Loadable';
import Users from 'app/containers/Users';
import React from 'react';

export const dashboardRoutes = [
  {
    path: '/compute',
    name: 'Compute',
    icon: <CloudServerOutlined className="submenu-icon" />,
    children: [
      {
        path: '/instances',
        name: 'Instances',
        icon: <HddOutlined />,
        exact: true,
        component: <Landing />,
      },
      {
        path: '/keypairs',
        name: 'Keypairs',
        icon: <KeyOutlined />,
        exact: true,
        component: <Landing />,
      },
      // {
      //   path: '/security',
      //   name: 'Security',
      //   icon: <SecurityScanOutlined />,
      //   exact: true,
      //   // component: SecGroups
      // },
    ],
  },
  {
    path: '/orders',
    name: 'Orders',
    icon: <ShoppingCartOutlined className="submenu-icon" />,
    children: [
      {
        path: '',
        name: 'Overviews',
        icon: <FundOutlined />,
        exact: true,
        component: <Landing />,
      },
    ],
  },
  {
    path: '/users',
    name: 'Users',
    icon: <UserOutlined className="submenu-icon" />,
    children: [
      {
        path: '',
        name: 'Overviews',
        icon: <FundOutlined />,
        exact: true,
        component: <Users />,
      },
    ],
  },
];
