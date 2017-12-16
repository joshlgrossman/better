import { JsonController, Get, Post, Authorized, CurrentUser, Body } from 'routing-controllers';
import { injectable, inject } from 'inversify';

import { TransactionsService } from '../services';
import { TransactionsAssembler } from '../assemblers';

@JsonController()
@injectable()
export class TransactionsController {
  constructor(@inject(TransactionsService) transactionsService, @inject(TransactionsAssembler) transactionsAssembler) {
    this.transactionsService = transactionsService;
    this.transactionsAssembler = transactionsAssembler;
  }

  @Get('/transactions')
  async list(
    @CurrentUser({ required: true })
    user
  ) {
    const transactions = await this.transactionsService.list(user);

    return transactions.map(transaction => this.transactionsAssembler.assemble(transaction));
  }

  @Post('/transactions/new')
  async create(
    @CurrentUser({ required: true })
    user,
    @Body() body
  ) {
    const transaction = await this.transactionsService.create(user.username, body.to, body.amount);

    return this.transactionsAssembler.assemble(transaction);
  }
}
