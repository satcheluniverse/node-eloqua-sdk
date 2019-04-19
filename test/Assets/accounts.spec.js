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

  /** @test {AccountGroups} */
  describe('Account Group Tests', () => {
    /** @test {AccountGroups#get} */
    it('Account Group Get', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.accounts.groups.get(null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/groups');
        done();
      }));
    });

    /** @test {AccountGroups#get} */
    it('Account Group Get with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.accounts.groups.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/groups');
        expect(xhr.config.params).to.eql({count: 1});
        done();
      }));
    });

    /** @test {AccountGroups#getOne} */
    it('Account Group Get One', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.accounts.groups.getOne(1, null,
        assertSuccessful(done, function(err, result, xhr) {
          expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
          done();
        }));
    });

    /** @test {AccountGroups#getOne} */
    it('Account Group Get One with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.accounts.groups.getOne(1, {depth: 'minimal'},
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

      eloqua.assets.accounts.groups.create(data, assertSuccessful(done, function(err, result, xhr) {
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

      eloqua.assets.accounts.groups.update(1, data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
        expect(xhr.config.method).to.eql('put');
        done();
      }));
    });

    /** @test {AccountGroups#delete} */
    it('Account Group Delete', done => {
      eloqua = new Eloqua(getOptions({isTest: true}));

      eloqua.assets.accounts.groups.delete(1, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/account/group/1');
        expect(xhr.config.method).to.eql('delete');
        done();
      }));
    });
  });
});
