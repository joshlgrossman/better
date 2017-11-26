import * as LoginForm from '../components/loginForm/state';
import * as Header from '../components/header/state';
import * as user from './user';

export const state = {
  location: 'login',
  user,
  LoginForm,
  Header
};
