import { hash, compare } from 'bcrypt';

import { Hook, Model } from './decorators';

@Model({
  username: String,
  password: String
})
export class User {
  @Hook('pre', 'save')
  async hashPassword(next) {
    if (!this.isModified('password')) return next();

    try {
      this.password = await hash(this.password, 10);
    } catch {}
  }

  async authenticate(password) {
    try {
      return await compare(this.password, password);
    } catch {
      return false;
    }
  }
}
