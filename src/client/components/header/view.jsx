import { h } from 'hyperapp';

import { TitleBar } from '../titleBar/view';
import { UserProfile } from '../userProfile/view';

import * as styles from './styles.less';

export const Header = ({ state, actions, input }) => (
  <div {...styles}>
    <TitleBar
      effects={{
        toggleExpanded: actions.toggleExpanded
      }}
      input={{
        user: input.user,
        isExpanded: state.isExpanded
      }}
    />
  </div>
);
