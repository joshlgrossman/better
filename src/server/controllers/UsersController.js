import { JsonController, Get, Post, Params, Body } from 'routing-controllers';
import { injectable, inject } from 'inversify';

import { UsersService } from '../services';

@JsonController()
@injectable()
export class UsersController {
  constructor(@inject(UsersService) usersService) {
    this.usersService = usersService;
  }

  @Get('/users/:username')
  get(@Params() params) {
    return this.usersService.get(params.username);
  }

  @Get('/users')
  list() {
    return this.usersService.list();
  }

  @Post('/users')
  register(@Body() body) {
    return this.usersService.register(body.username, body.password);
  }

  @Post('/users/:username')
  login(@Params() params, @Body() body) {
    return this.usersService.login(params.username, body.password);
  }
}
