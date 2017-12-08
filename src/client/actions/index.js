import * as LoginForm from '../components/loginForm/actions';
import * as Header from '../components/header/actions';

import { setUser } from './setUser';
import { setLocation } from './setLocation';

export * from './setUser';
export * from './setLocation';

export const actions = {
  setUser,
  setLocation,
  LoginForm,
  Header
};
