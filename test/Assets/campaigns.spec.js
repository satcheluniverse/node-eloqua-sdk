import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsCampaignsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Campaigns} */
describe('Campaign Tests', () => {
  let eloqua;
  let campaigns;

  beforeEach(function(done) {
    campaigns = assetsCampaignsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    campaigns.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Campaigns#get} */
  it('Campaign Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaigns');
      done();
    }));
  });

  /** @test {Campaigns#get} */
  it('Campaign Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaigns');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Campaigns#getOne} */
  it('Campaign Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/1');
      done();
    }));
  });

  /** @test {Campaigns#getOne} */
  it('Campaign Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Campaigns#create} */
  it('Campaign Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Campaigns#update} */
  it('Campaign Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Campaigns#delete} */
  it('Campaign Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {Campaigns#activate} */
  it('Campaign Activate', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.activate(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/active/1');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Campaigns#activate} */
  it('Campaign Activate with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.activate(1, {activateNow: true}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/active/1');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Campaigns#deactivate} */
  it('Campaign Deactivate', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.campaigns.deactivate(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/campaign/draft/1');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });
});
