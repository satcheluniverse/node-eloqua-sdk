import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsTrackedURLsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {TrackedURLs} */
describe('TrackedURLs Tests', () => {
  let eloqua;
  let trackedUrls;

  beforeEach(function(done) {
    trackedUrls = assetsTrackedURLsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    trackedUrls.done();
    nock.cleanAll();
    return done();
  });

  /** @test {TrackedURLs#get} */
  it('TrackedURLs Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.trackedUrls.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/trackedUrls');
      done();
    }));
  });

  /** @test {TrackedURLs#get} */
  it('TrackedURLs Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.trackedUrls.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/trackedUrls');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

});
