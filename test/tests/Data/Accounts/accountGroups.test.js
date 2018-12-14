let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {AccountGroups} */
describe('Account Group Tests', () => {

  /** @test {AccountGroups#get} */
  it('Account Group Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.get({count: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {AccountGroups#get} */
  it('Account Group Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.get().then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {AccountGroups#getOne} */
  it('Account Group Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.get({count: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.data.accounts.groups.getOne(results.elements[0].id).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {AccountGroups#getOne} */
  it('Account Group Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.get({count: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.data.accounts.groups.getOne(results.elements[0].id, {depth: 'minimal'}).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {AccountGroups#getOne} */
  it('Account Group Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.getOne(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {AccountGroups#create} */
  it('Account Group Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.accounts.groups.create(data).then(onFulfilled);
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

  /** @test {AccountGroups#create} */
  it('Account Group Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.create(data).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {AccountGroups#update} */
  it('Account Group Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.accounts.groups.update(1, data).then(onFulfilled);
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

  /** @test {AccountGroups#update} */
  it('Account Group Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.update(1, data).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {AccountGroups#delete} */
  it('Account Group Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.accounts.groups.delete(1).then(onFulfilled);
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

  /** @test {AccountGroups#delete} */
  it('Account Group Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.accounts.groups.delete(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
