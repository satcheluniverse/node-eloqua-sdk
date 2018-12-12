let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {CustomObjectImports} */
describe('Custom Object Import Tests', () => {

  let parentId;

  before((done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.get({count: 1}).then((customObject) => {
        parentId = customObject.items[0].uri.replace('/customObjects/', '');
      }).then(done);
    });
  });

  /** @test {CustomObjectImports#get} */
  it('Custom Object Import Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.get(parentId,{limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#get} */
  it('Custom Object Import Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.get(parentId).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#getOne} */
  it('Custom Object Import Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.get(parentId,{limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.customObjects.imports.getOne(parentId,results.items[0].uri.replace(`/customObjects/${parentId}/imports/`,'')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#getOne} */
  it('Custom Object Import Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.getOne(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#create} */
  it('Custom Object Import Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.imports.create(parentId, data).then(onFulfilled);
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

  /** @test {CustomObjectImports#create} */
  it('Custom Object Import Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.create(parentId, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#update} */
  it('Custom Object Import Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.imports.update(parentId,1, data).then(onFulfilled);
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

  /** @test {CustomObjectImports#update} */
  it('Custom Object Import Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.update(parentId,1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#delete} */
  it('Custom Object Import Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.imports.delete(parentId,1).then(onFulfilled);
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

  /** @test {CustomObjectImports#delete} */
  it('Custom Object Import Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.delete(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#uploadData} */
  it('Custom Object Import Upload Data with Querystring', (done) => {
    let data = [{
      ID: '1'
    }];
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.imports.uploadData(parentId,1, data).then(onFulfilled);
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

  /** @test {CustomObjectImports#uploadData} */
  it('Custom Object Import Upload Data with Error', (done) => {
    let data = [{
      ID: '1'
    }];
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.uploadData(parentId,1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectImports#deleteData} */
  it('Custom Object Import Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.imports.deleteData(parentId,1).then(onFulfilled);
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

  /** @test {CustomObjectImports#deleteData} */
  it('Custom Object Import Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.imports.deleteData(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
