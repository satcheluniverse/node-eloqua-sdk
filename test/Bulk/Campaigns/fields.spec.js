import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCampaignResponsesFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CampaignResponsesFields} */
describe('Campaign Responses Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkCampaignResponsesFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CampaignResponsesFields#get} */
  it('Campaign Responses Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.fields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/fields');
      done();
    }));
  });

  /** @test {CampaignResponsesFields#get} */
  it('Campaign Responses Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.fields.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CampaignResponsesFields#getOne} */
  it('Campaign Responses Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignResponses.fields.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaignResponses/fields/1');
      done();
    }));
  });
});
