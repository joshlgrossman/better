import { injectable } from 'inversify';

import { Stock } from '../models';

@injectable()
export class StocksService {
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
