let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {ImportPriorities} */
describe('Bulk Import Priorities Tests', () => {

  /** @test {ImportPriorities#get} */
  it('Import Priorities Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.imports.priorities.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {ImportPriorities#get} */
  it('Import Priorities Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.imports.priorities.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ImportPriorities#getData} */
  it('Import Priorities Get Data', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.imports.priorities.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.imports.priorities.getData(results.items[0].uri.replace('/imports/priorities','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ImportPriorities#getData} */
  it('Import Priorities Get Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.imports.priorities.getData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
