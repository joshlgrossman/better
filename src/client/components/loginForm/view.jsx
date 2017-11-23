import { h } from 'hyperapp';

import * as styles from './styles.less';

export const LoginForm = ({ state, actions, effects }) => (
  <div {...styles}>
    <div className={state.error ? 'error' : 'hidden'}>{state.error}</div>
    <div className="form">
      <input placeholder="username" value={state.username} oninput={e => actions.setUsername(e.target.value)} />
      <input placeholder="password" value={state.password} oninput={e => actions.setPassword(e.target.value)} />
    </div>
    <button 
      className={`login ${!state.username || !state.password ? 'disabled' : ''}`} 
      onclick={() => actions.login(effects)}
    >
      {state.isRegister ? 'Register' : 'Log in'}
    </button>
    <button className="register-toggle" onclick={actions.toggleRegister}>
      {state.isRegister ? 'Already a member? Click to log in' : 'Not a member? Click to register'}
    </button>
  </div>
);
