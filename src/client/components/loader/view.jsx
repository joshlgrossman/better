import { h } from 'hyperapp';

import * as styles from './styles.less';

export const Loader = ({ input }) => (
  <div {...styles}>
    <div className={`loader ${input.isVisible ? 'shown' : 'hidden'}`}>
      <div className="dot dot-one" />
      <div className="dot dot-two" />
      <div className="dot dot-three" />
      <div className="dot dot-four" />
    </div>
  </div>
);
