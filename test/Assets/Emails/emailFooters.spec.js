import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {assetsEmailFootersResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {EmailFooters} */
describe('Email Footer Tests', () => {
  let eloqua;
  let emailFooters;

  beforeEach(function(done) {
    emailFooters = assetsEmailFootersResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    emailFooters.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EmailFooters#get} */
  it('Email Footer Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footers');
      done();
    }));
  });

  /** @test {EmailFooters#get} */
  it('Email Footer Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footers');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {EmailFooters#getOne} */
  it('Email Footer Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footer/1');
      done();
    }));
  });

  /** @test {EmailFooters#getOne} */
  it('Email Footer Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footer/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {EmailFooters#create} */
  it('Email Footer Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footer');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {EmailFooters#update} */
  it('Email Footer Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footer/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {EmailFooters#delete} */
  it('Email Footer Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.emails.footers.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/email/footer/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
