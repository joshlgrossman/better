import { expect } from 'chai';
import { UsersAssembler } from '../../../src/server/assemblers';

describe('server.assemblers.UsersAssembler', () => {

  let assembler;

  beforeEach(() => {
    assembler = new UsersAssembler();
  });

  describe('when assembling a user', () => {
    it('should only return relevant fields', () => {
      const result = assembler.assemble({
        username: 'hello',
        password: 'world',
        credits: 10,
        messages: [],
        shares: [],
        somethingElse: 'blah',
        token: 'abcd'
      });

      expect(result).to.deep.equal({
        username: 'hello',
        credits: 10,
        messages: [],
        token: 'abcd',
        shares: []
      });
    });
  });

});