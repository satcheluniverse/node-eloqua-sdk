import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkAccountListsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {AccountLists} */
describe('Account List Tests', () => {
  let eloqua;
  let lists;

  beforeEach(function(done) {
    lists = bulkAccountListsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    lists.done();
    nock.cleanAll();
    return done();
  });

  /** @test {AccountLists#get} */
  it('Account List Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.lists.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/lists');
      done();
    }));
  });

  /** @test {AccountLists#get} */
  it('Account List Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.lists.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/lists');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {AccountLists#getOne} */
  it('Account List Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.lists.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/lists/1');
      done();
    }));
  });
});
