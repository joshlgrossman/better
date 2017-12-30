import { h } from 'hyperapp';

import * as styles from '../styles/global.less';

import { LoginView } from './LoginView';
import { HomeView } from './HomeView';

const views = {
  login: LoginView,
  home: HomeView
};

export const view = (state, actions) => (
  <div {...styles} onupdate={actions.saveState} oncreate={actions.loadState}>
    {views[state.location](state, actions)}
  </div>
);
