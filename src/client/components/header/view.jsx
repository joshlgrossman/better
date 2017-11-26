import { h } from 'hyperapp';

import * as styles from './styles.less';

export const Header = ({ state, actions }) => (
  <div {...styles}>
    <div className="title">better</div>
    <div className="user-info">
      <div className="credits">{state.credits}</div>
      <div className="user">{state.name}</div>
    </div>
  </div>
);
