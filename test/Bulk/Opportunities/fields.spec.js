import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkOpportunitiesFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {OpportunitiesFields} */
describe('Opportunities Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkOpportunitiesFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {OpportunitiesFields#get} */
  it('Opportunities Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.fields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/fields');
      done();
    }));
  });

  /** @test {OpportunitiesFields#get} */
  it('Opportunities Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.fields.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {OpportunitiesFields#getOne} */
  it('Opportunities Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.opportunities.fields.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/opportunities/fields/1');
      done();
    }));
  });
});
