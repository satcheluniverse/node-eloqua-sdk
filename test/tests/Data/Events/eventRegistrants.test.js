let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {EventRegistrants} */
describe('Event Registrants Tests', () => {
  let parentId;

  before((done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.events.get({count: 1}).then((event) => {
        parentId = event.elements[0].id;
      }).then(done);
    });
  });

  /** @test {EventRegistrants#get} */
  it('Event Registrants Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.events.registrants.get(parentId, {count: 1}).then((event) => {
        expect(event).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {EventRegistrants#get} */
  it('Event Registrants Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.events.registrants.get(parentId).then((event) => {
        expect(event).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EventRegistrants#getOne} */
  it('Event Registrants Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.events.registrants.get(parentId, {count: 1}).then((events) => {
        expect(events).to.be.an('Object');
        eloqua.data.events.registrants.getOne(parentId, events.elements[0].id).then((event) => {
          expect(event).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EventRegistrants#getOne} */
  it('Event Registrants Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.events.registrants.get(parentId, {count: 1}).then((events) => {
        expect(events).to.be.an('Object');
        eloqua.data.events.registrants.getOne(parentId, events.elements[0].id, {depth: 'minimal'}).then((event) => {
          expect(event).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EventRegistrants#getOne} */
  it('Event Registrants Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.events.registrants.getOne(parentId, 1).then((event) => {
        expect(event).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EventRegistrants#create} */
  it('Event Registrants Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.events.registrants.create(parentId, data).then(onFulfilled);
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

  /** @test {EventRegistrants#create} */
  it('Event Registrants Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.events.registrants.create(parentId, data).then((event) => {
        expect(event).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {EventRegistrants#update} */
  it('Event Registrants Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.events.registrants.update(parentId, 1, data).then(onFulfilled);
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

  /** @test {EventRegistrants#update} */
  it('Event Registrants Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions(parentId, {sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.events.registrants.update(parentId, 1, data).then((event) => {
        expect(event).to.eql('500: InternalServerError');
      });
    }).then(done);
  });

  /** @test {EventRegistrants#delete} */
  it('Event Registrants Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.data.events.registrants.delete(parentId, 1).then(onFulfilled);
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

  /** @test {EventRegistrants#delete} */
  it('Event Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.data.events.registrants.delete(parentId, 1).then((event) => {
        expect(event).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
