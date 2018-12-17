let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {CustomObjects} */
describe('Bulk Custom Object Tests', () => {
  /** @test {CustomObjects#get} */
  it('Custom Object Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.get({ limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {CustomObjects#get} */
  it('Custom Object Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.get().then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CustomObjects#getOne} */
  it('Custom Object Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.get({ limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.customObjects.getOne(results.items[0].uri.replace('/customObjects/', '')).then(result => {
            expect(result).to.be.an('Object');
          });
        });
      })
      .then(done);
  });

  /** @test {CustomObjects#getOne} */
  it('Custom Object Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.getOne(1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  require('./exports.test');
  require('./imports.test');
  require('./fields.test');
  require('./syncActions.test');
});
