import { h } from 'hyperapp';

import { Header } from '../components/header/view';

export const HomeView = (state, actions) => (
  <div>
    <Header state={state.user} />
  </div>
);
