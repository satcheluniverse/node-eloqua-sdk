import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkEventsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {Events} */
describe('Bulk Event Tests', () => {
  let eloqua;
  let events;

  beforeEach(function(done) {
    events = bulkEventsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    events.done();
    nock.cleanAll();
    return done();
  });
  /** @test {Events#get} */
  it('Event Get', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events');
      done();
    }));
  });

  /** @test {Events#get} */
  it('Event Get with Querystring', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {Events#getOne} */
  it('Event Get One', done => {
    let eloqua = new Eloqua(getOptions());

    eloqua.bulk.events.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/events/1');
      done();
    }));
  });

  require('./exports.spec');
  require('./imports.spec');
  require('./fields.spec');
});
