import { app } from 'hyperapp';

import { state } from './state';
import { actions } from './actions';
import { routes } from './view';
import { router } from './router';

app(router({
  state,
  actions,
  routes
}));
