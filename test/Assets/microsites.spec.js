import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsMicrositesResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Microsites} */
describe('Microsite Tests', () => {
  let eloqua;
  let microsites;

  beforeEach(function(done) {
    microsites = assetsMicrositesResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    microsites.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Microsites#get} */
  it('Microsite Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsites');
      done();
    }));
  });

  /** @test {Microsites#get} */
  it('Microsite Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsites');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Microsites#getOne} */
  it('Microsite Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsite/1');
      done();
    }));
  });

  /** @test {Microsites#getOne} */
  it('Microsite Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsite/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Microsites#create} */
  it('Microsite Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsite');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Microsites#update} */
  it('Microsite Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsite/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Microsites#delete} */
  it('Microsite Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.microsites.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/microsite/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
