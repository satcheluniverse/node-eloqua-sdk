let common = require('../../common');
let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

describe('Email Tests', () => {
  it('Email Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.get({count: 1}).then((email) => {
        expect(email).to.be.an('Object');
      });
    }).then(done);
  });

  it('Email Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.emails.get().then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Email Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.getOne(emails.elements[0].id).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  it('Email Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.getOne(emails.elements[0].id, {depth: 'minimal'}).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  it('Email Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.getOne(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Email Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.create(data).then(onFulfilled);
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

  it('Email Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.create(data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Email Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.update(1, data).then(onFulfilled);
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

  it('Email Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.update(1, data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  it('Email Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.delete(1).then(onFulfilled);
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

  it('Email Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.delete(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
