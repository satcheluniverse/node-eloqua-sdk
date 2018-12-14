let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {CustomObjectExports} */
describe('Custom Object Export Tests', () => {

  let parentId;

  before((done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.get({count: 1}).then((customObject) => {
        parentId = customObject.items[0].uri.replace('/customObjects/', '');
      }).then(done);
    });
  });

  /** @test {CustomObjectExports#get} */
  it('Custom Object Export Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.get(parentId, {limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#get} */
  it('Custom Object Export Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.get(parentId).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#getOne} */
  it('Custom Object Export Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.get(parentId, {limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.customObjects.exports.getOne(parentId, results.items[0].uri.replace(`/customObjects/${parentId}/exports/`,'')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#getOne} */
  it('Custom Object Export Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.getOne(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#create} */
  it('Custom Object Export Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.exports.create(parentId, data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: data
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
          }).then(done);
        });
      });
    });
  });

  /** @test {CustomObjectExports#create} */
  it('Custom Object Export Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.create(parentId, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#update} */
  it('Custom Object Export Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.exports.update(parentId, 1, data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: data
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
          }).then(done);
        });
      });
    });
  });

  /** @test {CustomObjectExports#update} */
  it('Custom Object Export Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      }
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.update(parentId, 1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#delete} */
  it('Custom Object Export Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.exports.delete(parentId, 1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deleted.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
          }).then(done);
        });
      });
    });
  });

  /** @test {CustomObjectExports#delete} */
  it('Custom Object Export Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.delete(parentId, 1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#getData} */
  it('Custom Object Export Get Data', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.get(parentId,{limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.customObjects.exports.getData(parentId, results.items[0].uri.replace(`/customObjects/${parentId}/exports/`,'')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#getData} */
  it('Custom Object Export Get Data with Querystring', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.get(parentId, {limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.customObjects.exports.getData(parentId, results.items[0].uri.replace(`/customObjects/${parentId}/exports/`,''), {limit: 1}).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#getData} */
  it('Custom Object Export Get Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.getData(parentId, 1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectExports#deleteData} */
  it('Custom Object Export Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.exports.deleteData(parentId, 1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deleted.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
          }).then(done);
        });
      });
    });
  });

  /** @test {CustomObjectExports#deleteData} */
  it('Custom Object Export Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.exports.deleteData(parentId, 1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
