let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {EmailGroups} */
describe('Email Group Tests', () => {

  /** @test {EmailGroups#get} */
  it('Email Group Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.get({count: 1}).then((email) => {
        expect(email).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {EmailGroups#get} */
  it('Email Group Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.get().then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.groups.getOne(emails.elements[0].id).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.groups.getOne(emails.elements[0].id, {depth: 'minimal'}).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EmailGroups#getOne} */
  it('Email Group Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.getOne(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailGroups#create} */
  it('Email Group Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.groups.create(data).then(onFulfilled);
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

  /** @test {EmailGroups#create} */
  it('Email Group Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.create(data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailGroups#update} */
  it('Email Group Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.groups.update(1, data).then(onFulfilled);
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

  /** @test {EmailGroups#update} */
  it('Email Group Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.update(1, data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailGroups#delete} */
  it('Email Group Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.groups.delete(1).then(onFulfilled);
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

  /** @test {EmailGroups#delete} */
  it('Email Group Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.groups.delete(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
