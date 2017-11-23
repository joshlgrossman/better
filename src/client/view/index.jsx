import { h } from 'hyperapp';

import { LoginForm } from './loginForm';
import * as styles from '../styles/global.less';

export const view = (state, actions) => (
  <div {...styles}>
    <LoginForm state={state.LoginForm} actions={actions.LoginForm} />
  </div>
);
