export enum Message {
  SYSTEM_ERROR = 'Lỗi hệ thống, vui lòng thử lại sau',
  CONTRACT_NOT_EXISTS = 'Số hợp đồng không tồn tại',
  QUERY_FAIL = 'Tìm kiếm hợp đồng thất bại',
  CREATE_SUCCESS = 'Tạo Order thành công',
  EXTEND_SUCCESS = 'Tạo Order thành công',
  CREATE_FAIL = 'Tạo Order thất bại',
  EXTEND_FAIL = 'Tạo Order thất bại',
  UPDATE_SUCCESS = 'Cập nhật Order thành công',
  UPDATE_FAIL = 'Cập nhật Order thất bại',
  ACTION_FAILED = 'Hành động thực thi thất bại',
  APPROVE_SUCCESS = 'Approve Order thành công',
  DEPLOY_SUCCESS = 'Deploy thành công',
  DEPLOY_FAIL = 'Deploy thất bại',
  DATA_INVALID = 'Dữ liệu không hợp lệ',
  ACTION_NOT_ALLOW = 'User không được cấp quyền',
}

export const Status = {
  DEPLOYED: { text: 'DEPLOYED', status: 'Processing' },
  PAY_IN_COMPLETED: { text: 'PAY_IN_COMPLETED', status: 'Processing' },
  PAY_COMPLETED: { text: 'PAY_COMPLETED', status: 'Success' },
  PAY_LATER: { text: 'PAY_LATER', status: 'Warning' },
  PENDING: { text: 'PENDING', status: 'Warning' },
  DELETED: { text: 'DELETED', status: 'Error' },
  REJECTED: { text: 'REJECTED', status: 'Error' },
  NEW: { text: 'NEW', status: 'Default' },
};
