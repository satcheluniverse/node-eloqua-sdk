import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCustomObjectsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CustomObjects} */
describe('Bulk Custom Object Tests', () => {
  let eloqua;
  let customObjects;

  beforeEach(function(done) {
    customObjects = bulkCustomObjectsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    customObjects.done();
    nock.cleanAll();
    return done();
  });
  /** @test {CustomObjects#get} */
  it('Custom Object Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects');
      done();
    }));
  });

  /** @test {CustomObjects#get} */
  it('Custom Object Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CustomObjects#getOne} */
  it('Custom Object Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.customObjects.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/customObjects/1');
      done();
    }));
  });

  require('./exports.spec');
  require('./imports.spec');
  require('./fields.spec');
  require('./syncActions.spec');
});
