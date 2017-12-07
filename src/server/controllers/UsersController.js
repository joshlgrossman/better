import { JsonController, Get, Post, Params, Body } from 'routing-controllers';
import { injectable, inject } from 'inversify';

import { UsersService } from '../services';
import { UsersAssembler } from '../assemblers';

@JsonController()
@injectable()
export class UsersController {
  constructor(@inject(UsersService) usersService, @inject(UsersAssembler) usersAssembler) {
    this.usersService = usersService;
    this.usersAssembler = usersAssembler;
  }

  @Get('/users/:username')
  async get(@Params() params) {
    const user = await this.usersService.get(params.username);
    return this.usersAssembler.assemble(user);
  }

  @Get('/users')
  async list() {
    const users = await this.usersService.list();
    return users.map(user => this.usersAssembler.assemble(user));
  }

  @Post('/users/new')
  async register(@Body() body) {
    const user = await this.usersService.register(body.username, body.password);
    return this.usersAssembler.assemble(user);
  }

  @Post('/users/:username')
  async login(@Params() params, @Body() body) {
    const user = await this.usersService.login(params.username, body.password);
    return this.usersAssembler.assemble(user);
  }
}
