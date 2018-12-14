let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {EmailHeaders} */
describe('Email Header Tests', () => {

  /** @test {EmailHeaders#get} */
  it('Email Header Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.get({count: 1}).then((email) => {
        expect(email).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {EmailHeaders#get} */
  it('Email Header Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.get().then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailHeaders#getOne} */
  it('Email Header Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.headers.getOne(emails.elements[0].id).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EmailHeaders#getOne} */
  it('Email Header Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.headers.getOne(emails.elements[0].id, {depth: 'minimal'}).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EmailHeaders#getOne} */
  it('Email Header Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.getOne(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailHeaders#create} */
  it('Email Header Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.headers.create(data).then(onFulfilled);
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

  /** @test {EmailHeaders#create} */
  it('Email Header Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.create(data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailHeaders#update} */
  it('Email Header Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.headers.update(1, data).then(onFulfilled);
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

  /** @test {EmailHeaders#update} */
  it('Email Header Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.update(1, data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailHeaders#delete} */
  it('Email Header Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.headers.delete(1).then(onFulfilled);
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

  /** @test {EmailHeaders#delete} */
  it('Email Header Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.headers.delete(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
