let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {CustomObjectFields} */
describe('Custom Object Field Tests', () => {
  let parentId;

  before(done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects
        .get({ count: 1 })
        .then(customObject => {
          parentId = customObject.items[0].uri.replace('/customObjects/', '');
        })
        .then(done);
    });
  });

  /** @test {CustomObjectFields#get} */
  it('Custom Object Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.fields.get(parentId, { limit: 1 }).then(result => {
          expect(result).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {CustomObjectFields#get} */
  it('Custom Object Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.fields.get(parentId).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });

  /** @test {CustomObjectFields#getOne} */
  it('Custom Object Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.fields.get(parentId, { limit: 1 }).then(results => {
          expect(results).to.be.an('Object');
          eloqua.bulk.customObjects.fields
            .getOne(parentId, results.items[0].uri.replace(`/customObjects/${parentId}/fields/`, ''))
            .then(result => {
              expect(result).to.be.an('Object');
            });
        });
      })
      .then(done);
  });

  /** @test {CustomObjectFields#getOne} */
  it('Custom Object Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.bulk.customObjects.fields.getOne(parentId, 1).then(result => {
          expect(result).to.eql('401: You are not authorized to make this request.');
        });
      })
      .then(done);
  });
});
