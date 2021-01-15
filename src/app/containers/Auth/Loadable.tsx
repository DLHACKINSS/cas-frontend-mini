import { Loadable } from 'utils/loadable';

export const SignIn = Loadable(() => import('./SignIn'));
export const SignUp = Loadable(() => import('./SignUp'));
export const ForgotPassword = Loadable(() => import('./ForgotPassword'));
