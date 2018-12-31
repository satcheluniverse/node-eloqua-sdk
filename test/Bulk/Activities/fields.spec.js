import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkActivitiesFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ActivitiesFields} */
describe('Activities Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkActivitiesFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ActivitiesFields#get} */
  it('Activities Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.fields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/fields');
      done();
    }));
  });

  /** @test {ActivitiesFields#get} */
  it('Activities Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.fields.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ActivitiesFields#getOne} */
  it('Activities Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.activities.fields.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/activities/fields/1');
      done();
    }));
  });
});
