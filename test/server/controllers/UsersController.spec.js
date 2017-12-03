import { expect, use } from 'chai';
import { stub } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { UsersController } from '../../../src/server/controllers';

use(sinonChai);

describe('server.controllers.UsersController', () => {
  
  let usersService;
  let controller;

  beforeEach(() => {
    usersService = {
      list: stub().returns('list test'),
      get: stub().returns('get test'),
      register: stub().returns('register test'),
      login: stub().returns('login test')
    }

    controller = new UsersController(usersService);
  });

  describe('when getting a specific user', () => {
    it('should query for that user', () => {
      controller.get({ username: 'test' });
      expect(usersService.get).to.have.been.calledWith('test');
    });

    it('should return the results', () => {
      const resp = controller.get({ username: 'test' });
      expect(resp).to.equal('get test');
    });
  });

  describe('when listing all users', () => {
    it('should get all users', () => {
      const resp = controller.list();
      expect(usersService.list).to.have.been.called;
    });

    it('should return the results', () => {
      const resp = controller.list();
      expect(resp).to.equal('list test');
    });
  });

  describe('when registering a new user', () => {
    it('should register the user', () => {
      controller.register({ username: 'hello', password: 'world' });
      expect(usersService.register).to.have.been.calledWith('hello', 'world');
    });

    it('should return the results', () => {
      const resp = controller.register({ username: 'hello', password: 'world' });
      expect(resp).to.equal('register test');
    });
  });

  describe('when logging in a user', () => {
    it('should attempt to login the user', () => {
      controller.login({ username: 'hello' }, { password: 'world' });
      expect(usersService.login).to.have.been.calledWith('hello', 'world');
    });

    it('should return the results', () => {
      const resp = controller.login({ username: 'hello' }, { password: 'world' });
      expect(resp).to.equal('login test');
    });
  });

});