import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {dataActivitiesResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {Activities} */
describe('Activities Tests', () => {
  let eloqua;
  let activities;

  beforeEach(function(done) {
    activities = dataActivitiesResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    activities.done();
    nock.cleanAll();
    return done();
  });

  /** @test {Activities#get} */
  it('Activities Get', done => {
    eloqua = new Eloqua(getOptions({restVersion: '1.0'}));

    eloqua.data.activities.get(1, null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/1.0/data/activities/contact/1');
      done();
    }));
  });

  /** @test {Activities#get} */
  it('Activities Get with Querystring', done => {
    eloqua = new Eloqua(getOptions({restVersion: '1.0'}));

    eloqua.data.activities.get(1, {
      endDate: 1,
      startDate: 1,
      type: 'campaignMembership',
    }, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/1.0/data/activities/contact/1');
      expect(xhr.config.params).to.eql({endDate: 1, startDate: 1, type: 'campaignMembership'});
      done();
    }));
  });
});
