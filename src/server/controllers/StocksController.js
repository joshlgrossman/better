import { JsonController, Get } from 'routing-controllers';
import { injectable, inject } from 'inversify';

import { StocksService } from '../services';
import { StocksAssembler } from '../assemblers';

@JsonController()
@injectable()
export class StocksController {
  constructor(@inject(StocksService) stocksService, @inject(StocksAssembler) stocksAssembler) {
    this.stocksService = stocksService;
    this.stocksAssembler = stocksAssembler;
  }

  @Get('/stocks/:symbol')
  async get(@Params() params) {
    const stock = await this.stocksService.get(params.symbol);

    return this.stocksAssembler.assemble(stock);
  }

  @Get('/stocks')
  async list() {
    const stocks = await this.stocksService.list();

    return stocks.map(stock => this.stocksAssembler.assemble(stock));
  }

}