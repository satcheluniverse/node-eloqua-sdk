import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactScoringModelsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactScoringModels} */
describe('Contact Scoring Model Tests', () => {
  let eloqua;
  let scoringModels;

  beforeEach(function(done) {
    scoringModels = bulkContactScoringModelsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    scoringModels.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactScoringModels#get} */
  it('Contact Scoring Model Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.scoringModels.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/scoring/models');
      done();
    }));
  });

  /** @test {ContactScoringModels#get} */
  it('Contact Scoring Model Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.scoringModels.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/scoring/models');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactScoringModels#getOne} */
  it('Contact Scoring Model Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.scoringModels.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/scoring/models/1');
      done();
    }));
  });
});
