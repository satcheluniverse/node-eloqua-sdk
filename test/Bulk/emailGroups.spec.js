import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {bulkEmailGroupsResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

/** @test {EmailGroups} */
describe('Bulk Email Group Tests', () => {
  let eloqua;
  let emailGroups;

  beforeEach(function(done) {
    emailGroups = bulkEmailGroupsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    emailGroups.done();
    nock.cleanAll();
    return done();
  });

  /** @test {EmailGroups#get} */
  it('Email Group Export Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailGroups.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailGroups');
      done();
    }));
  });

  /** @test {EmailGroups#get} */
  it('Email Group Export Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailGroups.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailGroups');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Export Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.emailGroups.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/emailGroups/1');
      done();
    }));
  });
});
