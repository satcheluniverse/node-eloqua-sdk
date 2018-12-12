let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {AccountLists} */
describe('Account List Tests', () => {

  /** @test {AccountLists#get} */
  it('Account List Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.accounts.lists.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {AccountLists#get} */
  it('Account List Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.accounts.lists.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {AccountLists#getOne} */
  it('Account List Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.accounts.lists.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.accounts.lists.getOne(results.items[0].uri.replace('/accounts/lists/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {AccountLists#getOne} */
  it('Account List Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.accounts.lists.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
