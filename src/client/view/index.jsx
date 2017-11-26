import { h } from 'hyperapp';

import * as styles from '../styles/global.less';

import { LoginView } from './LoginView';
import { HomeView } from './HomeView';

const views = {
  login: LoginView,
  home: HomeView
};

export const view = (state, actions) => <div {...styles}>{views[state.location](state, actions)}</div>;
