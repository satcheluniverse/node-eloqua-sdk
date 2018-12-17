let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ContactSegments} */
describe('Contact Segment Tests', () => {
  /** @test {ContactSegments#get} */
  it('Contact Segment Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.segments.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactSegments#get} */
  it('Contact Segment Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.segments.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactSegments#getOne} */
  it('Contact Segment Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.segments.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.contacts.segments.getOne(results.items[0].uri.replace('/contacts/segments/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactSegments#getOne} */
  it('Contact Segment Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.segments.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
