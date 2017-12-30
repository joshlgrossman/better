import { app } from 'hyperapp';

import { state } from './state';
import { actions } from './actions';
import { view } from './view';
import { initializeApp } from './utils';

initializeApp(app(state, actions, view, document.body));
