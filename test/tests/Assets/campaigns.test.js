let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {Campaigns} */
describe('Campaign Tests', () => {

  /** @test {Campaigns#get} */
  it('Campaign Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.campaigns.get({count: 1}).then((campaign) => {
        expect(campaign).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Campaigns#get} */
  it('Campaign Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.get().then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Campaigns#getOne} */
  it('Campaign Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.campaigns.get({count: 1}).then((campaigns) => {
        expect(campaigns).to.be.an('Object');
        eloqua.assets.campaigns.getOne(campaigns.elements[0].id).then((campaign) => {
          expect(campaign).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Campaigns#getOne} */
  it('Campaign Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.campaigns.get({count: 1}).then((campaigns) => {
        expect(campaigns).to.be.an('Object');
        eloqua.assets.campaigns.getOne(campaigns.elements[0].id, {depth: 'minimal'}).then((campaign) => {
          expect(campaign).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Campaigns#getOne} */
  it('Campaign Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.getOne(1).then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Campaigns#create} */
  it('Campaign Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.campaigns.create(data).then(onFulfilled);
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

  /** @test {Campaigns#create} */
  it('Campaign Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.create(data).then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Campaigns#update} */
  it('Campaign Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.campaigns.update(1, data).then(onFulfilled);
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

  /** @test {Campaigns#update} */
  it('Campaign Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.update(1, data).then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Campaigns#delete} */
  it('Campaign Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.campaigns.delete(1).then(onFulfilled);
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

  /** @test {Campaigns#delete} */
  it('Campaign Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.delete(1).then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Campaigns#activate} */
  it('Campaign Activate', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.campaigns.activate(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Activated.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Activated.');
          }).then(done);
        });
      });
    });
  });

  /** @test {Campaigns#activate} */
  it('Campaign Activate with Error and Querystring', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.activate(1, {activateNow: true}).then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Campaigns#deactivate} */
  it('Campaign Deactivate', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.campaigns.deactivate(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Deactivated.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Deactivated.');
          }).then(done);
        });
      });
    });
  });

  /** @test {Campaigns#deactivate} */
  it('Campaign Deactivate with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.campaigns.deactivate(1).then((campaign) => {
        expect(campaign).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
