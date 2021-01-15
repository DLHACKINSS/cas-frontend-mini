// fisrt character must be a letter
export const VALID_ITEM_NAME = '^[a-zA-Z].*';

// must have "@" and suffix ".abc"
export const VALID_EMAIL = '^[w-.]+@([w-]+.)+[w-]{2,4}$	';

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
export const VALID_PASSWORD = '^(?=.[a-z])(?=.[A-Z])(?=.*d)[a-zA-Zd]{8,}$';

// only number and min lenght is 8
export const VALID_PHONE_NUM = '[0-9]{8,}';

export const N_VALID_NAME = /^[a-zA-Z].*/;

export const N_VALID_EMAIL = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

export const N_VALID_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

export const N_VALID_PHONE_NUM = /[0-9]{8,}/;
