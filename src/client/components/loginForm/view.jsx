import { h } from 'hyperapp';

import styles from './styles.less';

export const LoginForm = ({ state, actions }) => (
  <div {...styles}>
    <div className="form">
      <input placeholder="username" value={state.username} oninput={e => actions.setUsername(e.target.value)} />
      <input placeholder="password" value={state.password} oninput={e => actions.setPassword(e.target.value)} />
    </div>
    <button className="login btn primary">{state.isRegister ? 'Register' : 'Log in'}</button>
  </div>
);
