import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactFields} */
describe('Contact Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkContactFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactFields#get} */
  it('Contact Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.fields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/fields');
      done();
    }));
  });

  /** @test {ContactFields#get} */
  it('Contact Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.fields.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.fields.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/fields/1');
      done();
    }));
  });
});
