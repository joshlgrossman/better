import { h } from 'hyperapp';

import { router } from '../utils';

import * as styles from '../styles/global.less';
import { LoginForm } from '../components/loginForm/view';

export const LoginView = (state, actions) => (
  <div {...styles}>
    <LoginForm
      state={state.LoginForm}
      actions={actions.LoginForm}
      effects={{ 
        setUser: actions.setUser, 
        setLocation: actions.router.setLocation 
      }}
    />
  </div>
);
