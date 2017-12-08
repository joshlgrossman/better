import { expect, use } from 'chai';
import { stub, match } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { validate } from '../../../src/client/utils';

use(sinonChai);

describe('client.utils.validate', () => {
  
  let state;
  let validator;
  let schema;
  let result;

  beforeEach(() => {
    schema = {
      fieldA: {
        check: stub(),
        message: 'fieldA message'
      },
      fieldB: {
        check: stub(),
        message: 'fieldB message'
      }
    };

    state = {
      data: {
        fieldA: 'a',
        fieldB: 'b'
      }
    };

    validator = validate(schema);
  });

  describe('when field is pristine', () => {
    beforeEach(() => {
      schema.fieldA.check.returns(true);
      schema.fieldB.check.returns(false);
      result = validator({
        data: {
          fieldA: 'valid',
          fieldB: undefined
        }
      });
    });

    it('should set invalid', () => {
      expect(result.isValid).to.be.false;
    });

    it('should not include an error for the field', () => {
      expect(result.errors).to.deep.equal([]);
    });
  });

  describe('when validating', () => {
    it('should check each field', () => {
      validator(state);
      expect(schema.fieldA.check).to.have.been.calledWith('a', state.data);
      expect(schema.fieldB.check).to.have.been.calledWith('b', state.data);
    });
  });

  describe('when at least one field is invalid', () => {
    beforeEach(() => {
      schema.fieldA.check.returns(true);
      schema.fieldB.check.returns(false);
      result = validator(state);
    });

    it('should set invalid', () => {
      expect(result.isValid).to.be.false;
    });

    it('should add the invalid error message', () => {
      expect(result.errors).to.deep.equal([ schema.fieldB.message ]);
    });
  });

  describe('when no fields are invalid', () => {
    beforeEach(() => {
      schema.fieldA.check.returns(true);
      schema.fieldB.check.returns(true);
      result = validator(state);
    });

    it('should set valid', () => {
      expect(result.isValid).to.be.true;
    });

    it('should have no error messages', () => {
      expect(result.errors).to.deep.equal([]);
    });
  });

});