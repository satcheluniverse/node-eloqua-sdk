import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsExternalAssestsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {ExternalAssets} */
describe('External Asset Tests', () => {
  let eloqua;
  let externalAssets;

  beforeEach(function(done) {
    externalAssets = assetsExternalAssestsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    externalAssets.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ExternalAssets#get} */
  it('External Asset Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/externals');
      done();
    }));
  });

  /** @test {ExternalAssets#get} */
  it('External Asset Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/externals');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {ExternalAssets#getOne} */
  it('External Asset Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/1');
      done();
    }));
  });

  /** @test {ExternalAssets#getOne} */
  it('External Asset Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {ExternalAssets#create} */
  it('External Asset Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {ExternalAssets#update} */
  it('External Asset Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {ExternalAssets#delete} */
  it('External Asset Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.externalAssets.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });

  /** @test {ExternalAssetTypes} */
  describe('External Asset Type Tests', () => {
    /** @test {ExternalAssetTypes#get} */
    it('External Asset Type Get', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.get(null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/types');
        done();
      }));
    });

    /** @test {ExternalAssetTypes#get} */
    it('External Asset Type Get with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/types');
        expect(xhr.config.params).to.eql({count: 1});
        done();
      }));
    });

    /** @test {ExternalAssetTypes#getOne} */
    it('External Asset Type Get One', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/type/1');
        done();
      }));
    });

    /** @test {ExternalAssetTypes#getOne} */
    it('External Asset Type Get One with Querystring', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/type/1');
        expect(xhr.config.params).to.eql({depth: 'minimal'});
        done();
      }));
    });

    /** @test {ExternalAssetTypes#create} */
    it('External Asset Type Create', done => {
      let data = {
        name: 'Test',
      };
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.create(data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/type');
        expect(xhr.config.method).to.eql('post');
        done();
      }));
    });

    /** @test {ExternalAssetTypes#update} */
    it('External Asset Type Update', done => {
      let data = {
        name: 'Test',
      };
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.update(1, data, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/type/1');
        expect(xhr.config.method).to.eql('put');
        done();
      }));
    });

    /** @test {ExternalAssetTypes#delete} */
    it('External Asset Type Delete', done => {
      eloqua = new Eloqua(getOptions());

      eloqua.assets.externalAssets.types.delete(1, assertSuccessful(done, function(err, result, xhr) {
        expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/external/type/1');
        expect(xhr.config.method).to.eql('delete');
        done();
      }));
    });
  });
});
