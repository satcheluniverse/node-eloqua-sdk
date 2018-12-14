let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ContactLists} */
describe('Contact List Tests', () => {

  /** @test {ContactLists#get} */
  it('Contact List Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.get({count: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {ContactLists#get} */
  it('Contact List Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.get().then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.get({count: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.data.contacts.lists.getOne(results.elements[0].id).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.get({count: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.data.contacts.lists.getOne(results.elements[0].id, {depth: 'minimal'}).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ContactLists#getOne} */
  it('Contact List Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.getOne(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ContactLists#create} */
  it('Contact List Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.lists.create(data).then(onFulfilled);
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

  /** @test {ContactLists#create} */
  it('Contact List Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.create(data).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ContactLists#update} */
  it('Contact List Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.lists.update(1, data).then(onFulfilled);
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

  /** @test {ContactLists#update} */
  it('Contact List Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.update(1, data).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {ContactLists#delete} */
  it('Contact List Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.contacts.lists.delete(1).then(onFulfilled);
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

  /** @test {ContactLists#delete} */
  it('Contact List Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.contacts.lists.delete(1).then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
