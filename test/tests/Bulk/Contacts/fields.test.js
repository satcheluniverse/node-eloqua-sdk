let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ContactFields} */
describe('Contact Field Tests', () => {
  /** @test {ContactFields#get} */
  it('Contact Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.fields.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#get} */
  it('Contact Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.fields.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.fields.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.contacts.fields.getOne(results.items[0].uri.replace('/contacts/fields/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactFields#getOne} */
  it('Contact Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.fields.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
