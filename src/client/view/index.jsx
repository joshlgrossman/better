import { h } from 'hyperapp';

import { LoginView } from './LoginView';

export const routes = {
  login: LoginView,
  app: () => <div>Hello</div>
};