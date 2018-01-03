import { h } from 'hyperapp';

import * as styles from './styles.less';

export const Quote = ({ input, effects }) => (
  <div {...styles}>
    <div className="info">
      <div className="symbol">{input.stock.symbol}</div>
      <div className="price">{input.stock.price}</div>
      <div className="owned">{input.stock.sharesOwned}</div>
    </div>
    <div className="controls">
      {input.stock.price < input.user.credits
        ? <button className="buy" onclick={() => effects.buyShare(input.stock)}>Buy</button>
        : false}
      {input.stock.sharesOwned > 0
        ? <button className="sell" onclick={() => effects.sellShare(input.stock)}>Sell</button>
        : false}
    </div>
  </div>
);