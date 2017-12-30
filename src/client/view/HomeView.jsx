import { h } from 'hyperapp';

import { Header } from '../components/header';

export const HomeView = (state, actions) => (
  <div>
    <Header state={state.Header} actions={actions.Header} input={{ user: state.user }} />
  </div>
);
