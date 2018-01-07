import { hash, compare } from 'bcrypt';

import { Hook, Model } from './decorators';
import { Message } from './Message';

@Model({
  username: { type: String, required: true },
  password: { type: String, required: true },
  credits: { type: Number, default: 0 },
  messages: { type: [Message.schema], required: false },
  shares: [ { symbol: String, quantity: Number } ]
})
export class User {
  @Hook('pre', 'save')
  async hashPassword(next) {
    if (!this.isModified('password')) return next();

    try {
      this.password = await hash(this.password, 10);
    } catch {}

    next();
  }

  async authenticate(password) {
    try {
      return await compare(password, this.password);
    } catch {
      return false;
    }
  }
}
