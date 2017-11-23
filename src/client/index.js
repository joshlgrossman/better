import { app } from 'hyperapp';

import { state } from './state';
import { actions } from './actions';
import { view } from './view';

app({
  state,
  actions,
  view
});
