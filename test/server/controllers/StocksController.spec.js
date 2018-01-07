import { expect, use } from 'chai';
import { stub, match } from 'sinon';
import * as sinonChai from 'sinon-chai';
import { StocksController } from '../../../src/server/controllers';

use(sinonChai);

describe('server.controllers.StocksController', () => {
  
  let stocksService;
  let stocksAssembler;
  let controller;
  let resp;

  beforeEach(() => {
    stocksService = {
      get: stub().callsFake(() => Promise.resolve({ get: 'test' })),
      list: stub().callsFake(() => Promise.resolve([{ list: 'test' }])),
      buy: stub().callsFake(() => Promise.resolve({ buy: 'test' }))
    };

    stocksAssembler = {
      assemble: stub().returns('assembled')
    };

    controller = new StocksController(stocksService, stocksAssembler);
  });

  describe('when getting a stock', () => {
    beforeEach(async () => {
      resp = await controller.get({ symbol: 'TEST' });
    });
    
    it('should query for the transactions', () => {
      expect(stocksService.get).to.have.been.calledWith('TEST');
    });
    
    it('should assemble the results', () => {
      expect(stocksAssembler.assemble).to.have.been.calledWith(
        match({ get: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.equal('assembled');
    });
  });

  describe('when listing stocks', () => {
    beforeEach(async () => {
      resp = await controller.list();
    });
    
    it('should query for the transactions', () => {
      expect(stocksService.list).to.have.been.called;
    });
    
    it('should assemble the results', () => {
      expect(stocksAssembler.assemble).to.have.been.calledWith(
        match({ list: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.deep.equal(['assembled']);
    });
  });

  describe('when buying a stock', () => {
    beforeEach(async () => {
      resp = await controller.buy({ username: 'test' }, { symbol: 'TEST' });
    });

    it('should buy the stock', () => {
      expect(stocksService.buy).to.have.been.calledWith('TEST', 'test');
    });

    it('should assemble the results', () => {
      expect(stocksAssembler.assemble).to.have.been.calledWith(
        match({ buy: 'test' }));
    });

    it('should return the assembled results', () => {
      expect(resp).to.equal('assembled');
    });
  });

});