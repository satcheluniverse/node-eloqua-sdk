import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkEventFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EventFields} */
describe('Event Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkEventFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EventFields#get} */
  it('Event Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.fields.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/fields');
      done();
    }));
  });

  /** @test {EventFields#get} */
  it('Event Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.fields.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {EventFields#getOne} */
  it('Event Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.fields.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1/fields/1');
      done();
    }));
  });
});
