import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {bulkSyncActionsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

/** @test {SyncActions} */
describe('Bulk Sync Action Tests', () => {
  let eloqua;
  let syncActions;

  beforeEach(function(done) {
    syncActions = bulkSyncActionsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    syncActions.done();
    nock.cleanAll();
    return done();
  });

  /** @test {SyncActions#get} */
  it('Sync Action Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncActions.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncActions');
      done();
    }));
  });

  /** @test {SyncActions#get} */
  it('Sync Action Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.syncActions.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/syncActions');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });
});
