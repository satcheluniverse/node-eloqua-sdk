let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {ActivitiesExports} */
describe('Activities Export Tests', () => {

  /** @test {ActivitiesExports#get} */
  it('Activities Export Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#get} */
  it('Activities Export Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#getOne} */
  it('Activities Export Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.activities.exports.getOne(results.items[0].uri.replace('/activities/exports/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#getOne} */
  it('Activities Export Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#create} */
  it('Activities Export Create', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ActivityId: '{{Activity.Id}}'
      },
      filter: '\'{{Activity.Type}}\'=\'FormSubmit\''
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.exports.create(data).then(onFulfilled);
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

  /** @test {ActivitiesExports#create} */
  it('Activities Export Create with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ActivityId: '{{Activity.Id}}'
      },
      filter: '\'{{Activity.Type}}\'=\'FormSubmit\''
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.create(data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#update} */
  it('Activities Export Update', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ActivityId: '{{Activity.Id}}'
      },
      filter: '\'{{Activity.Type}}\'=\'FormSubmit\''
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.exports.update(1, data).then(onFulfilled);
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

  /** @test {ActivitiesExports#update} */
  it('Activities Export Update with Error', (done) => {
    let data = {
      name: 'Test',
      fields: {
        ActivityId: '{{Activity.Id}}'
      },
      filter: '\'{{Activity.Type}}\'=\'FormSubmit\''
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.update(1, data).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#delete} */
  it('Activities Export Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.exports.delete(1).then(onFulfilled);
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

  /** @test {ActivitiesExports#delete} */
  it('Activities Export Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.delete(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#getData} */
  it('Activities Export Get Data', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.activities.exports.getData(results.items[0].uri.replace('/activities/exports/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#getData} */
  it('Activities Export Get Data with Querystring', (done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.activities.exports.getData(results.items[0].uri.replace('/activities/exports/',''), {limit: 1}).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#getData} */
  it('Activities Export Get Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.getData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {ActivitiesExports#deleteData} */
  it('Activities Export Delete Data', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.bulk.activities.exports.deleteData(1).then(onFulfilled);
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

  /** @test {ActivitiesExports#deleteData} */
  it('Activities Export Delete Data with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.activities.exports.deleteData(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
