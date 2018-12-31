import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {assetsOptionListsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {OptionLists} */
describe('Option List Tests', () => {
  let eloqua;
  let optionLists;

  beforeEach(function(done) {
    optionLists = assetsOptionListsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    optionLists.done();
    nock.cleanAll();
    return done();
  });


  /** @test {OptionLists#get} */
  it('Option List Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionLists');
      done();
    }));
  });

  /** @test {OptionLists#get} */
  it('Option List Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionLists');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {OptionLists#getOne} */
  it('Option List Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionList/1');
      done();
    }));
  });

  /** @test {OptionLists#getOne} */
  it('Option List Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionList/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {OptionLists#create} */
  it('Option List Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionList');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {OptionLists#update} */
  it('Option List Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionList/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {OptionLists#delete} */
  it('Option List Delete', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.assets.optionLists.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/assets/optionList/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
