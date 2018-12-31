import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsLandingPagesResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {LandingPages} */
describe('Landing Page Tests', () => {
  let eloqua;
  let landingPages;

  beforeEach(function(done) {
    landingPages = assetsLandingPagesResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    landingPages.done();
    nock.cleanAll();
    return done();
  });


  /** @test {LandingPages#get} */
  it('Landing Page Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPages');
      done();
    }));
  });

  /** @test {LandingPages#get} */
  it('Landing Page Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPages');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {LandingPages#getOne} */
  it('Landing Page Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPage/1');
      done();
    }));
  });

  /** @test {LandingPages#getOne} */
  it('Landing Page Get One with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPage/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {LandingPages#create} */
  it('Landing Page Create', done => {
    let data = {
      name: 'Test',
    };
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPage');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {LandingPages#update} */
  it('Landing Page Update', done => {
    let data = {
      name: 'Test',
    };
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPage/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {LandingPages#delete} */
  it('Landing Page Delete', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.assets.landingPages.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/landingPage/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
