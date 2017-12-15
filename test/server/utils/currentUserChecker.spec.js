import { expect } from 'chai';
import { sign, verify } from 'jsonwebtoken';
import { jwtSecret } from '../../../src/server/config';
import { currentUserChecker } from '../../../src/server/utils';

describe('server.utils.currentUserChecker', () => {

  let action;
  let headers;

  beforeEach(() => {
    headers = {};
    action = { request: { headers } };
  });

  describe('when token is signed correctly', () => {
    it('should return the user', done => {
      headers.authorization = sign({ data: 'test' }, jwtSecret);

      currentUserChecker(action)
        .then(result => {
          expect(result).to.have.property('data', 'test');
          done();
        });
    });
  });

  describe('when token is signed incorrectly', () => {
    it('should return null', done => {
      headers.authorization = sign({ data: 'test' }, 'nope');

      currentUserChecker(action)
        .then(result => {
          expect(result).to.be.null;
          done();
        });
    });
  });

});