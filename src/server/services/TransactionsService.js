import { injectable } from 'inversify';

import { Transaction, User } from '../models';

@injectable()
export class TransactionsService {
  async list(user) {
    try {
      const transactions = await Transaction.model.find().or([{ from: user.username }, { to: user.username }]);

      return transactions.map(transaction => transactions.toObject());
    } catch {
      return [];
    }
  }

  async create(from, to, amount) {
    try {
      const fromUser = await User.model.findOne({ username: from });
      const toUser = await User.model.findOne({ username: to });

      if (fromUser.credits < amount) throw new Error('Not enough credits');

      fromUser.credits -= amount;
      toUser.credits += amount;

      await fromUser.save();
      await toUser.save();

      const transaction = await Transaction.model.create({ from, to, amount });

      return transaction.toObject();
    } catch {
      return null;
    }
  }
}
