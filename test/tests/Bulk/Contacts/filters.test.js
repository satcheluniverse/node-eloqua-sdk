let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ContactFilters} */
describe('Contact Filter Tests', () => {

  /** @test {ContactFilters#get} */
  it('Contact Filter Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.contacts.filters.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {ContactFilters#get} */
  it('Contact Filter Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.contacts.filters.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ContactFilters#getOne} */
  it('Contact Filter Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.contacts.filters.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.contacts.filters.getOne(results.items[0].uri.replace('/contacts/filters/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ContactFilters#getOne} */
  it('Contact Filter Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.contacts.filters.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
