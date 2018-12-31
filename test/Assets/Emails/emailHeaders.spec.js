import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {assetsEmailHeadersResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EmailHeaders} */
describe('Email Header Tests', () => {
  let eloqua;
  let emailHeaders;

  beforeEach(function(done) {
    emailHeaders = assetsEmailHeadersResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    emailHeaders.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EmailHeaders#get} */
  it('Email Header Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/headers');
      done();
    }));
  });

  /** @test {EmailHeaders#get} */
  it('Email Header Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/headers');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {EmailHeaders#getOne} */
  it('Email Header Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/header/1');
      done();
    }));
  });

  /** @test {EmailHeaders#getOne} */
  it('Email Header Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/header/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {EmailHeaders#create} */
  it('Email Header Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/header');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EmailHeaders#update} */
  it('Email Header Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/header/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {EmailHeaders#delete} */
  it('Email Header Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.headers.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/header/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
