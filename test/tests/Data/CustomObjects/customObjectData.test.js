let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {CustomObjectData} */
describe('Custom Object Data Tests', () => {
  let parentId;

  before((done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.get({count: 1}).then((customObject) => {
        parentId = customObject.elements[0].id;
      }).then(done);
    });
  });

  /** @test {CustomObjectData#get} */
  it('Custom Object Data Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.get(parentId, {count: 1}).then((customObjectData) => {
        expect(customObjectData).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {CustomObjectData#get} */
  it('Custom Object Data Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.get(parentId).then((customObjectData) => {
        expect(customObjectData).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {CustomObjectData#getOne} */
  it('Custom Object Data Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.get(parentId, {count: 1}).then((customObjectsData) => {
        expect(customObjectsData).to.be.an('Object');
        eloqua.data.customObjects.data.getOne(parentId, customObjectsData.elements[0].id).then((customObjectData) => {
          expect(customObjectData).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectData#getOne} */
  it('Custom Object Data Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.get(parentId, {count: 1}).then((customObjectsData) => {
        expect(customObjectsData).to.be.an('Object');
        eloqua.data.customObjects.data.getOne(parentId, customObjectsData.elements[0].id, {depth: 'minimal'}).then((customObjectData) => {
          expect(customObjectData).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {CustomObjectData#getOne} */
  it('Custom Object Data Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.getOne(parentId, 1).then((customObjectData) => {
        expect(customObjectData).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {CustomObjectData#create} */
  it('Custom Object Data Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.customObjects.data.create(parentId, data).then(onFulfilled);
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

  /** @test {CustomObjectData#create} */
  it('Custom Object Data Create with Error', function (done) {
    this.timeout(100000);
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.create(parentId, data).then((customObjectData) => {
        expect(customObjectData).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {CustomObjectData#update} */
  it('Custom Object Data Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.customObjects.data.update(parentId, 1, data).then(onFulfilled);
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

  /** @test {CustomObjectData#update} */
  it('Custom Object Data Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.update(parentId, 1, data).then((customObjectData) => {
        expect(customObjectData).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {CustomObjectData#delete} */
  it('Custom Object Data Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.customObjects.data.delete(parentId, 1).then(onFulfilled);
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

  /** @test {CustomObjectData#delete} */
  it('Custom Object Data Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.data.delete(parentId, 1).then((customObjectData) => {
        expect(customObjectData).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
