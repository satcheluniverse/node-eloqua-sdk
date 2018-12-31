import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactFiltersResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactFilters} */
describe('Contact Filter Tests', () => {
  let eloqua;
  let filters;

  beforeEach(function(done) {
    filters = bulkContactFiltersResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    filters.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactFilters#get} */
  it('Contact Filter Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.filters.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/filters');
      done();
    }));
  });

  /** @test {ContactFilters#get} */
  it('Contact Filter Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.filters.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/filters');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactFilters#getOne} */
  it('Contact Filter Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.filters.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/filters/1');
      done();
    }));
  });
});
