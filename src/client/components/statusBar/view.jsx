import { h } from 'hyperapp';

import * as styles from './styles.less';

export const StatusBar = ({ state, actions }) => (
  <div {...styles}>
    <div className="title">Better</div>
    <div className="user">{state.user.name}</div>
  </div>
);
