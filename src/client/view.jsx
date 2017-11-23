import { h } from 'hyperapp';

import { LoginForm } from './components/loginForm/view';
import * as styles from './styles/global.less';

export const view = (state, actions) => (
  <div {...styles}>
    <LoginForm state={state.LoginForm} actions={actions.LoginForm} setUser={actions.setUser} />
  </div>
);
