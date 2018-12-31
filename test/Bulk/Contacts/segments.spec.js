import expect from 'must';
import nock from 'nock';

import {Eloqua, getOptions} from '../../helpers/common';
import {bulkContactSegmentsResponse} from '../../helpers/mocksSuccess';
import {assertSuccessful} from '../../helpers/callbacks';

nock.disableNetConnect();

/** @test {ContactSegments} */
describe('Contact Segment Tests', () => {
  let eloqua;
  let fields;

  beforeEach(function(done) {
    fields = bulkContactSegmentsResponse();
    return setTimeout(done, 200);
  });

  afterEach(function(done) {
    eloqua = {};
    fields.done();
    nock.cleanAll();
    return done();
  });

  /** @test {ContactSegments#get} */
  it('Contact Segment Get', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.segments.get(null, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/segments');
      done();
    }));
  });

  /** @test {ContactSegments#get} */
  it('Contact Segment Get with Querystring', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.segments.get({limit: 1}, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/segments');
      expect(xhr.config.params).to.eql({limit: 1});
      done();
    }));
  });

  /** @test {ContactSegments#getOne} */
  it('Contact Segment Get One', done => {
    eloqua = new Eloqua(getOptions());

    eloqua.bulk.contacts.segments.getOne(1, assertSuccessful(done, function(err, result, xhr) {
      expect(xhr.config.url).to.eql('https://secure.p01.eloqua.com/API/Bulk/2.0/contacts/segments/1');
      done();
    }));
  });
});
