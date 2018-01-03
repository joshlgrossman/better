import { h } from 'hyperapp';

import { Quote } from '../quote/view';

import * as styles from './styles.less';

export const Positions = ({ input, effects }) => (
  <div {...styles}>
    {(input.user.positions || [])
      .map(position => (
        <Quote
          input={{
            user: input.user,
            stock: position
          }}
          effects={effects}
        />))}
  </div>
);