import { h } from 'hyperapp';

import { LoginView } from './LoginView';
import { HomeView } from './HomeView';

const views = {
  login: LoginView,
  home: HomeView
};

export const view = (state, actions) => views[state.location](state, actions);
