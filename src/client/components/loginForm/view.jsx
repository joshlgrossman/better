import { h } from 'hyperapp';

import * as styles from './styles.less';

export const LoginForm = ({ state, actions }) => (
  <div {...styles}>
    <div className="form">
      <input placeholder="username" value={state.username} oninput={e => actions.setUsername(e.target.value)} />
      <input placeholder="password" value={state.password} oninput={e => actions.setPassword(e.target.value)} />
    </div>
    <button className="login" onclick={actions.login}>
      {state.isRegister ? 'Register' : 'Log in'}
    </button>
    <button className="register-toggle" onclick={actions.toggleRegister}>
      {state.isRegister ? 'Already a member? Click to log in' : 'Not a member? Click to register'}
    </button>
  </div>
);