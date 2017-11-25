import { h } from 'hyperapp';

import { LoginForm } from '../components/loginForm/view';
import * as styles from '../styles/global.less';

export const LoginView = (state, actions) => (
  <div {...styles}>
    <LoginForm
      state={state.LoginForm}
      actions={actions.LoginForm}
      effects={{
        setUser: actions.setUser,
        setLocation: actions.setLocation
      }}
    />
  </div>
);
