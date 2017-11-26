import { h } from 'hyperapp';

import { LoginForm } from '../components/loginForm/view';

export const LoginView = (state, actions) => (
  <div>
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
