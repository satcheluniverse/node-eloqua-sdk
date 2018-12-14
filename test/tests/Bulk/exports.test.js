let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {Exports} */
describe('Bulk Export Tests', () => {

  /** @test {Exports#get} */
  it('Export Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.exports.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Exports#get} */
  it('Export Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.exports.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {Exports#getData} */
  it('Export Get Data', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.exports.getData().then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Exports#getData} */
  it('Export Get Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.exports.getData().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
