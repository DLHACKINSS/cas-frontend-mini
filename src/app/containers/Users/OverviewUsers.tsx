import { SearchOutlined } from '@ant-design/icons';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { Button, Input, notification } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { formatDateInTable } from 'utils/common';
import { Status } from './constants';
import {
  selectError,
  selectLoading,
  selectNotice,
  selectPagination,
  selectUsers,
} from './selectors';
import { actions } from './slice';

export interface TableListUser {
  id: number;
  user_name: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
}

export default function OverviewUsers() {
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const users = useSelector(selectUsers);
  const pagination = useSelector(selectPagination);
  const error = useSelector(selectError);
  const notice = useSelector(selectNotice);
  const history = useHistory();

  const dataSource = formatDateInTable(users);

  useEffect(() => {
    dispatch(actions.loadUsers());
  }, [dispatch]);
  useEffect(() => {
    if (notice) dispatch(actions.loadUsers());
    else if (error)
      notification.error({
        message: error,
        placement: 'bottomRight',
        duration: 3,
      });
  }, [error, notice]);
  const match = useRouteMatch();
  const handleClick = input => {
    dispatch(
      actions.setData({
        data: { status: input.status === 'ACTIVE' ? 'DEACTIVATED' : 'ACTIVE' },
        userId: input.id,
      }),
    );
    dispatch(actions.updateUser());
  };
  const userClick = (record, index) => {
    const profile = { ...users[index].profile };
    delete profile.id;
    const user = { ...users[index], ...profile };
    delete user.profile;
    dispatch(actions.userQueried(user));
    history.push(`${match.url}/${record.user_name}`);
  };
  const columns: ProColumns<TableListUser>[] = [
    {
      title: 'No',
      dataIndex: 'index',
      valueType: 'indexBorder',
      width: 48,
    },
    {
      title: 'User Name',
      dataIndex: 'user_name',
      render: (text, record, index) => [
        <a onClick={() => userClick(record, index)}>{text}</a>,
      ],
      //  https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
          <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
        </div>
      ),
      filterIcon: filtered => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      //  https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
          <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
        </div>
      ),
      filterIcon: filtered => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
    },
    {
      title: 'User Role',
      dataIndex: 'role',
      //  https://ant.design/components/table-cn/#components-table-demo-custom-filter-panel
      filterDropdown: () => (
        <div style={{ padding: 8 }}>
          <Input style={{ width: 188, marginBottom: 8, display: 'block' }} />
        </div>
      ),
      filterIcon: filtered => (
        <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      initialValue: 'DEACTIVATED',
      filters: true,
      valueEnum: { ...Status },
    },
    {
      title: 'Create Date',
      width: 140,
      key: 'since',
      dataIndex: 'created_at',
      // valueType: 'date',
      // sorter: (a, b) => sortDate(a, b),
    },
    {
      title: 'Actions',
      width: 180,
      key: 'option',
      valueType: 'option',
      render: (text, record, index) => [
        <Button
          type="primary"
          size="small"
          danger={record.status === 'ACTIVE'}
          loading={loading}
          onClick={() => handleClick(record)}
        >
          {record.status === 'ACTIVE' ? 'DEACTIVATED' : 'ACTIVE'}
        </Button>,
      ],
    },
  ];
  return (
    <>
      <ProTable<TableListUser>
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => String(record.id)}
        options={{
          reload: () => dispatch(actions.loadUsers()),
          fullScreen: false,
        }}
        onChange={e => {
          dispatch(
            actions.setPagination({
              ...pagination,
              current: e.current,
              pageSize: e.pageSize,
            }),
          );
          dispatch(actions.loadUsers());
        }}
        pagination={{
          showQuickJumper: true,
          pageSize: pagination.pageSize,
          total: pagination.total,
        }}
        search={{
          layout: 'vertical',
          defaultCollapsed: true,
        }}
        dateFormatter="string"
      />
    </>
  );
}
