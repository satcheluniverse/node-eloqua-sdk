import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {assetsEmailsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {Emails} */
describe('Email Tests', () => {
  let eloqua;
  let emails;

  beforeEach(function(done) {
    emails = assetsEmailsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    emails.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Emails#get} */
  it('Email Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/emails');
      done();
    }));
  });

  /** @test {Emails#get} */
  it('Email Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/emails');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Emails#getOne} */
  it('Email Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/1');
      done();
    }));
  });

  /** @test {Emails#getOne} */
  it('Email Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Emails#create} */
  it('Email Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Emails#update} */
  it('Email Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Emails#delete} */
  it('Email Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  require('./emailDeployments.spec');
  require('./emailFooters.spec');
  require('./emailGroups.spec');
  require('./emailHeaders.spec');
});
