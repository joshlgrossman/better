import { injectable } from 'inversify';

@injectable()
export class TransactionsAssembler {
  assemble(transaction) {
    return {
      to: transaction.to,
      from: transaction.from,
      amount: transaction.amount
    };
  }
}
