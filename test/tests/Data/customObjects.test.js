let common = require('../../common');
let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

describe('Custom Object Tests', () => {
  it('Custom Object Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.get({count: 1}).then((customObject) => {
        expect(customObject).to.be.an('Object');
      });
    }).then(done);
  });

  it('Custom Object Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.get().then((customObject) => {
        expect(customObject).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Custom Object Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.get({count: 1}).then((customObjects) => {
        expect(customObjects).to.be.an('Object');
        eloqua.data.customObjects.getOne(customObjects.elements[0].id).then((customObject) => {
          expect(customObject).to.be.an('Object');
        });
      });
    }).then(done);
  });

  it('Custom Object Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.customObjects.get({count: 1}).then((customObjects) => {
        expect(customObjects).to.be.an('Object');
        eloqua.data.customObjects.getOne(customObjects.elements[0].id, {depth: 'minimal'}).then((customObject) => {
          expect(customObject).to.be.an('Object');
        });
      });
    }).then(done);
  });

  it('Custom Object Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.getOne(1).then((customObject) => {
        expect(customObject).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Custom Object Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.customObjects.create(data).then(onFulfilled);
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

  it('Custom Object Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.create(data).then((customObject) => {
        expect(customObject).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Custom Object Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.customObjects.update(1, data).then(onFulfilled);
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

  it('Custom Object Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.update(1, data).then((customObject) => {
        expect(customObject).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Custom Object Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.customObjects.delete(1).then(onFulfilled);
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

  it('Custom Object Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.customObjects.delete(1).then((customObject) => {
        expect(customObject).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
