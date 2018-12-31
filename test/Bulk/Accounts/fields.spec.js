import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkAccountFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {AccountFields} */
describe('Account Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkAccountFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {AccountFields#get} */
  it('Account Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.fields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/fields');
      done();
    }));
  });

  /** @test {AccountFields#get} */
  it('Account Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.fields.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {AccountFields#getOne} */
  it('Account Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.accounts.fields.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/accounts/fields/1');
      done();
    }));
  });
});
