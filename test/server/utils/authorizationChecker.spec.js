import { expect } from 'chai';
import { sign, verify } from 'jsonwebtoken';
import { jwtSecret } from '../../../src/server/config';
import { authorizationChecker } from '../../../src/server/utils';

describe('server.utils.authorizationChecker', () => {

  let action;
  let headers;

  beforeEach(() => {
    headers = {};
    action = { request: { headers } };
  });

  describe('when token is signed correctly', () => {
    it('should return true', done => {
      headers.authorization = sign({ data: 'test' }, jwtSecret);

      authorizationChecker(action)
        .then(result => {
          expect(result).to.be.true;
          done();
        });
    });
  });

  describe('when token is signed incorrectly', () => {
    it('should return false', done => {
      headers.authorization = sign({ data: 'test' }, 'nope');

      authorizationChecker(action)
        .then(result => {
          expect(result).to.be.false;
          done();
        });
    });
  });

});