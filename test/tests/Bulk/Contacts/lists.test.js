let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ContactLists} */
describe('Contact List Tests', () => {
  /** @test {ContactLists#get} */
  it('Contact List Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.lists.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {ContactLists#get} */
  it('Contact List Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.lists.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.lists.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.contacts.lists.getOne(results.items[0].uri.replace('/contacts/lists/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.contacts.lists.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
