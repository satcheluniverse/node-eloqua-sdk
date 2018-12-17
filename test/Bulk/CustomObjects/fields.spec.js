import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCustomObjectFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CustomObjectFields} */
describe('Custom Object Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkCustomObjectFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CustomObjectFields#get} */
  it('Custom Object Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.fields.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/fields');
      done();
    }));
  });

  /** @test {CustomObjectFields#get} */
  it('Custom Object Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.fields.get(1, {limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CustomObjectFields#getOne} */
  it('Custom Object Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.fields.getOne(1, 1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1/fields/1');
      done();
    }));
  });
});
