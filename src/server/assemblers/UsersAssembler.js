import { injectable } from 'inversify';

@injectable()
export class UsersAssembler {
  assemble(user) {
    return {
      username: user.username,
      credits: user.credits
    };
  }
}
