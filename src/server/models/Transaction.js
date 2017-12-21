import { Model, Hook } from './decorators';
import { User } from './User';

@Model({
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
  body: String
})
export class Transaction {
  @Hook('pre', 'save')
  async transfer() {
    try {
      const from = await User.model.findOne({ username: this.from });
      const to = await User.model.findOne({ username: this.to });
      
      if (from.credits < this.amount) throw new Error('Not enough credits');

      from.credits -= this.amount;
      to.credits += this.amount;

      await from.save();
      await to.save();
    } catch {}
  }
}
