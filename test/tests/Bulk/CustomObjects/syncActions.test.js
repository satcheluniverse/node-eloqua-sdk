let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {CustomObjectSyncActions} */
describe('Custom Object Sync Action Tests', () => {

  let parentId;

  before((done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.get({count: 1}).then((customObject) => {
        parentId = customObject.items[0].uri.replace('/customObjects/', '');
      }).then(done);
    });
  });

  /** @test {CustomObjectSyncActions#get} */
  it('Custom Object Sync Action Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.get(parentId,{limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#get} */
  it('Custom Object Sync Action Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.get(parentId).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#getOne} */
  it('Custom Object Sync Action Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.get(parentId,{limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.customObjects.syncActions.getOne(parentId,results.items[0].uri.replace(`/customObjects/${parentId}/syncActions/`,'')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#getOne} */
  it('Custom Object Sync Action Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.getOne(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#create} */
  it('Custom Object Sync Action Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID',
      syncActions: [{
        destination: '{{ContactList[1]}}',
        action: 'add'
      }],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.syncActions.create(parentId,data).then(onFulfilled);
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

  /** @test {CustomObjectSyncActions#create} */
  it('Custom Object Sync Action Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID',
      syncActions: [{
        destination: '{{GlobalSubscribe}}',
        action: 'setStatus',
        status: 'subscribed'
      }],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.create(parentId,data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#update} */
  it('Custom Object Sync Action Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID',
      syncActions: [{
        destination: '{{GlobalSubscribe}}',
        action: 'setStatus',
        status: 'subscribed'
      }],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.syncActions.update(parentId,1, data).then(onFulfilled);
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

  /** @test {CustomObjectSyncActions#update} */
  it('Custom Object Sync Action Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ID: `{{CustomObject[${parentId}].ExternalId}}`
      },
      identifierFieldName: 'ID',
      syncActions: [{
        destination: '{{GlobalSubscribe}}',
        action: 'setStatus',
        status: 'subscribed'
      }],
      isSyncTriggeredOnImport: false
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.update(parentId,1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#delete} */
  it('Custom Object Sync Action Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.syncActions.delete(parentId,1).then(onFulfilled);
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

  /** @test {CustomObjectSyncActions#delete} */
  it('Custom Object Sync Action Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.delete(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#uploadData} */
  it('Custom Object Sync Action Upload Data with Querystring', (done) => {
    let data = [{
      ID: 1
    }];
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.syncActions.uploadData(parentId,1, data).then(onFulfilled);
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

  /** @test {CustomObjectSyncActions#uploadData} */
  it('Custom Object Sync Action Upload Data with Error', (done) => {
    let data = [{
      ID: 1
    }];
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.uploadData(parentId,1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {CustomObjectSyncActions#deleteData} */
  it('Custom Object Sync Action Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.customObjects.syncActions.deleteData(parentId,1).then(onFulfilled);
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

  /** @test {CustomObjectSyncActions#deleteData} */
  it('Custom Object Sync Action Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.customObjects.syncActions.deleteData(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
