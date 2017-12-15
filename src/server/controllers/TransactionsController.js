import { JsonController, Get, Post, Authorized, CurrentUser, Body } from 'routing-controllers';
import { injectable, inject } from 'inversify';

@JsonController()
@injectable()
export class TransactionsController {

  @Get('/transactions')
  async list(@CurrentUser({ required: true }) user) {
    return [];
  }

  @Post('/transactions/new')
  async create(@CurrentUser({ required: true }) user, @Body() body) {
    return null;
  }

}