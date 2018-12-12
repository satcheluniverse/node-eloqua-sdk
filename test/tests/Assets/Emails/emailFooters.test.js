let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {EmailFooters} */
describe('Email Footer Tests', () => {

  /** @test {EmailFooters#get} */
  it('Email Footer Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.get({count: 1}).then((email) => {
        expect(email).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {EmailFooters#get} */
  it('Email Footer Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.get().then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailFooters#getOne} */
  it('Email Footer Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.footers.getOne(emails.elements[0].id).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EmailFooters#getOne} */
  it('Email Footer Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.get({count: 1}).then((emails) => {
        expect(emails).to.be.an('Object');
        eloqua.assets.emails.footers.getOne(emails.elements[0].id, {depth: 'minimal'}).then((email) => {
          expect(email).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EmailFooters#getOne} */
  it('Email Footer Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.getOne(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailFooters#create} */
  it('Email Footer Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.footers.create(data).then(onFulfilled);
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

  /** @test {EmailFooters#create} */
  it('Email Footer Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.create(data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailFooters#update} */
  it('Email Footer Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.footers.update(1, data).then(onFulfilled);
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

  /** @test {EmailFooters#update} */
  it('Email Footer Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.update(1, data).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EmailFooters#delete} */
  it('Email Footer Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.emails.footers.delete(1).then(onFulfilled);
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

  /** @test {EmailFooters#delete} */
  it('Email Footer Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.emails.footers.delete(1).then((email) => {
        expect(email).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
