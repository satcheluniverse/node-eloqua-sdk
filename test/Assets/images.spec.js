import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsImagesResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Images} */
describe('Image Tests', () => {
  let eloqua;
  let images;

  beforeEach(function(done) {
    images = assetsImagesResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    images.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Images#get} */
  it('Image Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.images.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/images');
      done();
    }));
  });

  /** @test {Images#get} */
  it('Image Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.images.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/images');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Images#getOne} */
  it('Image Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.images.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/image/1');
      done();
    }));
  });

  /** @test {Images#getOne} */
  it('Image Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.images.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/image/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Images#update} */
  it('Image Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.images.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/image/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Images#delete} */
  it('Image Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.images.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/image/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
