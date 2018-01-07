import { expect } from 'chai';
import { StocksAssembler } from '../../../src/server/assemblers';

describe('server.assemblers.StocksAssembler', () => {

  let assembler;

  beforeEach(() => {
    assembler = new StocksAssembler();
  });

  describe('when assembling a stock', () => {
    it('should only return relevant fields', () => {
      const result = assembler.assemble({
        symbol: 'TEST',
        price: 10,
        history: [ 1 ],
        description: 'this is a test',
        extra: 'field'
      });

      expect(result).to.deep.equal({
        symbol: 'TEST',
        price: 10,
        history: [ 1 ],
        description: 'this is a test'
      });
    });
  });
});