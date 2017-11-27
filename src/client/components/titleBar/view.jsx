import { h } from 'hyperapp';

import * as styles from './styles.less';

export const TitleBar = ({ input, effects }) => (
  <div {...styles}>
    <div className="title">better</div>
    <div className="user-info">
      <div className="credits">{input.user.credits}</div>
      <div className="user" onclick={effects.toggleExpanded}>
        {input.isExpanded ? 'close' : input.user.name}
      </div>
    </div>
  </div>
);
