import { injectable } from 'inversify';

@injectable()
export class UsersAssembler {
  assemble(user) {
    return {
      username: user.username,
      credits: user.credits,
      messages: user.messages,
      token: user.token,
      shares: user.shares
    };
  }
}
