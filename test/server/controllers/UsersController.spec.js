import { expect, use } from 'chai';
import { stub, match } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { UsersController } from '../../../src/server/controllers';

use(sinonChai);

describe('server.controllers.UsersController', () => {
  
  let usersService;
  let usersAssembler;
  let controller;

  beforeEach(() => {
    usersService = {
      list: stub().callsFake(() => Promise.resolve([{ list: 'test' }])),
      get: stub().callsFake(() => Promise.resolve({ get: 'test' })),
      register: stub().callsFake(() => Promise.resolve({ register: 'test' })),
      login: stub().callsFake(() => Promise.resolve({ login: 'test' }))
    };

    usersAssembler = {
      assemble: stub().returns('assembled')
    };

    controller = new UsersController(usersService, usersAssembler);
  });

  describe('when getting a specific user', () => {
    it('should query for that user', () => {
      controller.get({ username: 'get' }).catch(e => { throw e });
      expect(usersService.get).to.have.been.calledWith('get');
    });

    it('should assemble the results', done => {
      controller.get({ username: 'get' })
        .then(() => {
          expect(usersAssembler.assemble).to.have.been.calledWith(
            match({ get: 'test' }));
          done();
        })
        .catch(e => { throw e });
    });

    it('should return the assembled results', done => {
      controller.get({ username: 'get' })
        .then(resp => {
          expect(resp).to.equal('assembled');
          done();
        })
        .catch(e => { throw e });
    });
  });

  describe('when listing all users', () => {
    it('should get all users', () => {
      controller.list().catch(e => { throw e });
      expect(usersService.list).to.have.been.called;
    });

    it('should assemble the results', done => {
      controller.list()
        .then(() => {
          expect(usersAssembler.assemble).to.have.been.calledWith(
            match({ list: 'test' }));
          done();
        })
        .catch(e => { throw e });
    });

    it('should return the assembled results', done => {
      controller.list()
        .then(resp => {
          expect(resp).to.deep.equal([ 'assembled' ]);
          done();
        })
        .catch(e => { throw e });
    });
  });

  describe('when registering a new user', () => {
    it('should register the user', () => {
      controller.register({ username: 'hello', password: 'world' }).catch(e => { throw e });
      expect(usersService.register).to.have.been.calledWith('hello', 'world');
    });

    it('should assemble the results', done => {
      controller.register({ username: 'hello', password: 'world' })
        .then(() => {
          expect(usersAssembler.assemble).to.have.been.calledWith(
            match({ register: 'test' }));
          done();
        })
        .catch(e => { throw e });
    });

    it('should return the assembled results', done => {
      controller.register({ username: 'hello', password: 'world' })
        .then(resp => {
          expect(resp).to.equal('assembled');
          done();
        })
        .catch(e => { throw e });
    });
  });

  describe('when logging in a user', () => {
    it('should attempt to login the user', () => {
      controller.login({ username: 'hello' }, { password: 'world' }).catch(e => { throw e });
      expect(usersService.login).to.have.been.calledWith('hello', 'world');
    });

    it('should assemble the results', done => {
      controller.login({ username: 'hello' }, { password: 'world' })
        .then(() => {
          expect(usersAssembler.assemble).to.have.been.calledWith(
            match({ login: 'test' }));
          done();
        })
        .catch(e => { throw e });
    });

    it('should return the assembled results', done => {
      controller.login({ username: 'hello' }, { password: 'world' })
        .then(resp => {
          expect(resp).to.equal('assembled');
          done();
        })
        .catch(e => { throw e });
    });
  });

});