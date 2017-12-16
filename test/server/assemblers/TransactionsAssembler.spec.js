import { expect } from 'chai';
import { TransactionsAssembler } from '../../../src/server/assemblers';

describe('server.assemblers.TransactionsAssembler', () => {
  
  let assembler;

  beforeEach(() => {
    assembler = new TransactionsAssembler();
  });

  describe('when assembling a transaction', () => {
    it('should only return relevant fields', () => {
      const result = assembler.assemble({
        from: 'this',
        to: 'is',
        some: 'a',
        thing: 'test',
        amount: 42
      });

      expect(result).to.deep.equal({
        from: 'this',
        to: 'is',
        amount: 42
      });
    });
  });

});