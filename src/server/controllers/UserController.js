import { JsonController, Get, Post, Params, Body } from 'routing-controllers';
import { injectable, inject } from 'inversify';

import { UserService } from '../services';

@JsonController()
@injectable()
export class UserController {
  constructor(@inject(UserService) userService) {
    this.userService = userService;
  }

  @Get('/users/:username')
  get(@Params() params) {
    return this.userService.get(params.username);
  }

  @Get('/users')
  list() {
    return this.userService.list();
  }

  @Post('/users')
  register(@Body() body) {
    return this.userService.register(body.username, body.password);
  }

  @Post('/user/:username')
  login(@Params() params, @Body() body) {
    return this.userService.login(params.username, body.password);
  }
}
