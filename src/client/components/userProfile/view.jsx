import { h } from 'hyperapp';

import * as styles from './styles.less';

export const UserProfile = ({ input, effects }) => (
  <div {...styles}>
    <div className={input.isExpanded ? 'wrapper visible' : 'wrapper'}>
      <div className="content">
        <div className="messages">
          {input.user.messages &&
            input.user.messages.map(message => (
              <div className="message">
                <div className="message-details">
                  <div className="from">From: {message.from === input.user.name ? 'You' : message.from}</div>
                  <div className="to">To: {message.to === input.user.name ? 'You' : message.to}</div>
                </div>
                <div className="body">{message.body}</div>
              </div>
            ))}
        </div>
        <div className="controls">
          <button className="logout">Log out</button>
        </div>
      </div>
    </div>
  </div>
);
