import {
  CloudServerOutlined,
  FundOutlined,
  HddOutlined,
  KeyOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Instances from 'app/containers/Compute/Instances';
import Orders from 'app/containers/Orders';
import DataViewKeypairs from 'app/containers/Compute/Keypairs/DataViewKeypairs';
import React from 'react';
import Users from 'app/containers/Users';

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
        component: <Instances />,
      },
      {
        path: '/keypairs',
        name: 'Keypairs',
        icon: <KeyOutlined />,
        exact: true,
        component: <DataViewKeypairs />,
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
        component: <Orders />,
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
