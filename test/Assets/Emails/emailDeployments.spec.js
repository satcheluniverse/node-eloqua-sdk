import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {assetsEmailDeploymentsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EmailDeployments} */
describe('Email Deployment Tests', () => {
  let eloqua;
  let emailDeployments;

  beforeEach(function(done) {
    emailDeployments = assetsEmailDeploymentsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    emailDeployments.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EmailDeployments#getOne} */
  it('Email Deployment Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.deployments.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/deployment/1');
      done();
    }));
  });

  /** @test {EmailDeployments#getOne} */
  it('Email Deployment Get One with querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.deployments.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/deployment/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {EmailDeployments#create} */
  it('Email Deployment Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.deployments.create(data, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/deployment');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EmailDeployments#create} */
  it('Email Deployment Create with querystring', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.deployments.create(data, {preMerge: 'true'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/deployment');
      expect(xhr.config.params).to.eql({preMerge: 'true'});
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });
});
