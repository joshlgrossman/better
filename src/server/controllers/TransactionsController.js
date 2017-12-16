import { JsonController, Get, Post, Authorized, CurrentUser, Body } from 'routing-controllers';
import { injectable, inject } from 'inversify';
import { TransactionsService } from '../services/TransactionsService';

@JsonController()
@injectable()
export class TransactionsController {
  constructor(@inject(TransactionsService) transactionService) {
    this.transactionService = transactionService;
  }

  @Get('/transactions')
  async list(
    @CurrentUser({ required: true })
    user
  ) {
    return this.transactionService.list(user);
  }

  @Post('/transactions/new')
  async create(
    @CurrentUser({ required: true })
    user,
    @Body() body
  ) {
    return this.transactionService.create(user, body.to, body.amount);
  }
}
