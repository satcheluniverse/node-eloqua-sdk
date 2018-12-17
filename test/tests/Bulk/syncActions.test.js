let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {SyncActions} */
describe('Bulk Sync Action Tests', () => {
  /** @test {SyncActions#get} */
  it('Sync Action Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncActions.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {SyncActions#get} */
  it('Sync Action Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.syncActions.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
