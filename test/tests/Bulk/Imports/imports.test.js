let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {Imports} */
describe('Bulk Import Tests', () => {

  /** @test {Imports#get} */
  it('Import Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.imports.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Imports#get} */
  it('Import Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.imports.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {Imports#getData} */
  it('Import Get Data', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.imports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.imports.getData(results.items[0].uri.replace(['/','activities','imports'],'')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Imports#getData} */
  it('Import Get Data with Querystring', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.imports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.imports.getData(results.items[0].uri.replace(['/','activities','imports'],''), {limit: 1}).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Imports#getData} */
  it('Import Get Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.imports.getData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  require('./priorities.test');
});
