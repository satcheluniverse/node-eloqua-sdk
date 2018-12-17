import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {dataAccountsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Accounts} */
describe('Account Tests', () => {
  let eloqua;
  let accounts;

  beforeEach(function(done) {
    accounts = dataAccountsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    accounts.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Accounts#get} */
  it('Account Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.accounts.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/accounts');
      done();
    }));
  });

  /** @test {Accounts#get} */
  it('Account Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.accounts.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/accounts');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Accounts#getOne} */
  it('Account Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.accounts.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/account/1');
      done();
    }));
  });

  /** @test {Accounts#getOne} */
  it('Account Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.accounts.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/account/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Accounts#create} */
  it('Account Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.data.accounts.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/account');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Accounts#update} */
  it('Account Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.data.accounts.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/account/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Accounts#delete} */
  it('Account Delete', done => {
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.data.accounts.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/account/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {AccountGroups} */
  describe('Account Group Tests', () => {
    /** @test {AccountGroups#get} */
    it('Account Group Get', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.accounts.groups.get(null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/groups');
        done();
      }));
    });

    /** @test {AccountGroups#get} */
    it('Account Group Get with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.accounts.groups.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/groups');
        expect(xhr.config.params).to.eql({count: 1});
        done();
      }));
    });

    /** @test {AccountGroups#getOne} */
    it('Account Group Get One', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.accounts.groups.getOne(1, null,
        assertSuccessful(done, function(err, result, xhr) {
          expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
          done();
        }));
    });

    /** @test {AccountGroups#getOne} */
    it('Account Group Get One with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.data.accounts.groups.getOne(1, {depth: 'minimal'},
        assertSuccessful(done, function(err, result, xhr) {
          expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
          expect(xhr.config.params).to.eql({depth: 'minimal'});
          done();
        }));
    });

    /** @test {AccountGroups#create} */
    it('Account Group Create', done => {
      let data = {
        name: 'Test',
      };
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.data.accounts.groups.create(data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group');
        expect(xhr.config.method).to.eql('post');
        done();
      }));
    });

    /** @test {AccountGroups#update} */
    it('Account Group Update', done => {
      let data = {
        name: 'Test',
      };
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.data.accounts.groups.update(1, data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
        expect(xhr.config.method).to.eql('put');
        done();
      }));
    });

    /** @test {AccountGroups#delete} */
    it('Account Group Delete', done => {
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.data.accounts.groups.delete(1, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
        expect(xhr.config.method).to.eql('delete');
        done();
      }));
    });
  });
});
