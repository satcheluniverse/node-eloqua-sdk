import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../helpers/common';
import {dataExternalActivitiesResponse} from '../helpers/mocksSuccess';
import {assertSuccessful} from '../helpers/callbacks';

nock.disableNetConnect();

/** @test {ExternalActivities} */
describe('External Activities Tests', () => {
  let eloqua;
  let activities;

  beforeEach(function(done) {
    activities = dataExternalActivitiesResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    activities.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ExternalActivities#getOne} */
  it('External Activities Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.data.externalActivities.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/activity/1');
      done();
    }));
  });

  /** @test {ExternalActivities#create} */
  it('External Activities Create', done => {
    let data = {
      name: 'Test',
    };
    eloqua = new Eloqua(getOptions());

    eloqua.data.externalActivities.create(data, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/REST/2.0/data/activity');
      expect(xhr.config.method).to.eql('post');
      done();
    }));
  });
});
