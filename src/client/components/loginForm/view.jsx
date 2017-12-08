import { h } from 'hyperapp';

import * as styles from './styles.less';

export const LoginForm = ({ state, actions, effects }) => (
  <div {...styles}>
    <div className="form">
      <input
        placeholder="username"
        type="text"
        value={state.data.username}
        oninput={e => actions.setUsername(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={state.data.password}
        oninput={e => actions.setPassword(e.target.value)}
      />
    </div>
    <button className="login" disabled={!state.isValid} onclick={() => actions.login(effects)}>
      {state.isRegister ? 'Register' : 'Log in'}
    </button>
    <button className="register-toggle" onclick={actions.toggleRegister}>
      {state.isRegister ? 'Already a member? Click to log in' : 'Not a member? Click to register'}
    </button>
  </div>
);
