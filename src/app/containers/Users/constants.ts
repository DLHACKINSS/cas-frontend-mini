export enum Message {
  USER_NOT_FOUND = 'Không tìm thấy User',
  QUERY_FAIL = 'Tìm kiếm User thất bại',
  SYSTEM_ERROR = 'Lỗi hệ thống, vui lòng thử lại sau',
  CREATE_SUCCESS = 'Tạo User thành công',
  USER_ALREADY_EXISTS = 'User đã tồn tại',
  UPDATE_SUCCESS = 'Cập nhật User thành công',
  PASSWORD_INVALID = 'Sai mật khẩu, vui lòng thử lại',
  UPDATE_FAIL = 'Cập nhật thất bại',
  ACTION_NOT_ALLOW = 'User không được cấp quyền',
  DATA_INVALID = 'Dữ liệu không hợp lệ',
}

export const Gender = ['OTHER', 'MALE', 'FEMALE'];

export const Active = ['ACTIVE', 'DEACTIVATED'];

export const Status = {
  ACTIVE: { text: 'ACTIVE', status: 'Success' },
  DEACTIVATED: { text: 'DEACTIVATED', status: 'Warning' },
  BLOCKED: { text: 'BLOCKED', status: 'Error' },
};
