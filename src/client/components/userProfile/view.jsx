import { h } from 'hyperapp';

import * as styles from './styles.less';

export const UserProfile = ({ state, actions, input }) => (
  <div {...styles}>
    <div className={input.isExpanded ? 'wrapper visible' : 'wrapper'}>
      <div className="content">
        {input.user.messages &&
          input.user.messages.map(message => (
            <div className="message">
              <div className="from">{message.from}</div>
              <div className="to">{message.to}</div>
              <div className="body">{message.content}</div>
            </div>
          ))}
        <button className="logout">Log out</button>
      </div>
    </div>
  </div>
);
