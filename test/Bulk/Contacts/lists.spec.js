import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactListsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactLists} */
describe('Contact List Tests', () => {
  let eloqua;
  let lists;

  beforeEach(function(done) {
    lists = bulkContactListsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    lists.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactLists#get} */
  it('Contact List Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.lists.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/lists');
      done();
    }));
  });

  /** @test {ContactLists#get} */
  it('Contact List Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.lists.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/lists');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.lists.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/lists/1');
      done();
    }));
  });
});
