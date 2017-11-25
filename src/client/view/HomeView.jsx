import { h } from 'hyperapp';

import { StatusBar } from '../components/statusBar/view';

export const HomeView = (state, actions) => (
  <div>
    <StatusBar state={{ user: state.user }} />
  </div>
);
