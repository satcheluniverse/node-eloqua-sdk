import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {systemUsers} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Users} */
describe('User Tests', () => {
  let eloqua;
  let users;

  beforeEach(function(done) {
    users = systemUsers();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    users.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Users#get} */
  it('User Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.system.users.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/users');
      done();
    }));
  });

  /** @test {Users#get} */
  it('User Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.system.users.get({count: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/users');
      expect(xhr.config.params).to.eql({count: 1});
      done();
    }));
  });

  /** @test {Users#getOne} */
  it('User Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.system.users.getOne(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/user/1');
      done();
    }));
  });

  /** @test {Users#getOne} */
  it('User Get One with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.system.users.getOne(1, {depth: 'minimal'}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/user/1');
      expect(xhr.config.params).to.eql({depth: 'minimal'});
      done();
    }));
  });

  /** @test {Users#create} */
  it('User Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.system.users.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/user');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });

  /** @test {Users#update} */
  it('User Update', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.system.users.update(1, data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/user/1');
      expect(xhr.config.method).to.eql('put');
      done();
    }));
  });

  /** @test {Users#delete} */
  it('User Delete', done => {
    eloqua = new Eloqua(getOptions({isTest: true}));

    eloqua.system.users.delete(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/system/user/1');
      expect(xhr.config.method).to.eql('delete');
      done();
    }));
  });
});
