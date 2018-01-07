import { injectable } from 'inversify';

import { Stock, User } from '../models';

@injectable()
export class StocksService {
  async buy(symbol, username) {
    try {
      const user = await User.model.find({ username });
      const stock = await Stock.model.find({ symbol });

      if (user.credits < stock.price) throw new Error('Not enough credits');

      user.credits -= stock.price;

      await user.save();

      return stock.toObject();
    } catch {
      return null;
    }
  }

  async list() {
    try {
      const stocks = await Stock.model.find();

      return stocks.map(stock => stock.toObject());
    } catch {
      return [];
    }
  }

  async get(symbol) {
    try {
      const stock = await Stock.model.find({ symbol });

      return stock.toObject();
    } catch {
      return null;
    }
  }
}
