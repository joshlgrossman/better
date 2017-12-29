import * as LoginForm from '../components/loginForm/actions';
import * as Header from '../components/header/actions';

import { setUser } from './setUser';
import { setLocation } from './setLocation';
import { saveState } from './saveState';
import { loadState } from './loadState';

export * from './setUser';
export * from './setLocation';
export * from './saveState';
export * from './loadState';

export const actions = {
  setUser,
  setLocation,
  saveState,
  loadState,
  LoginForm,
  Header
};
