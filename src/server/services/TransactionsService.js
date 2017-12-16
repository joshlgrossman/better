import { injectable } from 'inversify';

import { Transaction } from '../models';

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
      const transaction = await Transaction.model.create({ from, to, amount });

      return transaction;
    } catch {
      return null;
    }
  }
}
