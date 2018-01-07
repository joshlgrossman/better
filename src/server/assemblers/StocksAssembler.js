import { injectable } from 'inversify';

@injectable()
export class StocksAssembler {
  assemble(stock) {
    return {
      symbol: stock.symbol,
      price: stock.price,
      history: stock.history,
      description: stock.description
    };
  }
}
