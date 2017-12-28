import { app } from 'hyperapp';

import { state } from './state';
import { actions } from './actions';
import { view } from './view';
import { initialize } from './utils';

initialize(app(state, actions, view, document.body));
