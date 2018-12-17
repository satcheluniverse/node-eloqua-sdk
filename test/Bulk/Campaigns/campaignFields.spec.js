import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkCampaignFieldsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {CampaignFields} */
describe('Campaign Field Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkCampaignFieldsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {CampaignFields#get} */
  it('Campaign Field Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignFields.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaigns/fields');
      done();
    }));
  });

  /** @test {CampaignFields#get} */
  it('Campaign Field Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignFields.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaigns/fields');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {CampaignFields#getOne} */
  it('Campaign Field Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.campaignFields.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/campaigns/fields/1');
      done();
    }));
  });
});
