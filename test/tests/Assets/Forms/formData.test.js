let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {FormData} */
describe('Form Data Tests', () => {
  /** @test {FormData#get} */
  it('Form Data Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua
      .init()
      .then(() => {
        eloqua.assets.forms.data.get(1, { count: 1 }).then(form => {
          expect(form).to.be.an('Object');
        });
      })
      .then(done);
  });

  /** @test {FormData#get} */
  it('Form Data Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({ baseURL: null, password: null }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.forms.data.get(1).then(form => {
          expect(form).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {FormData#create} */
  it('Form Data Create', done => {
    let data = {
      currentStatus: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.forms.data.create(1, data).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 200,
              response: data
            })
            .then(() => {
              expect(onFulfilled.getCall(0).args[0].data).to.eql(data);
            })
            .then(done);
        });
      });
    });
  });

  /** @test {FormData#create} */
  it('Form Data Create with Error', done => {
    let data = {
      currentStatus: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.forms.data.create(1, data).then(form => {
          expect(form).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });

  /** @test {FormData#delete} */
  it('Form Data Delete', done => {
    let eloqua = new EloquaApi(getOptions({ isTest: true }));
    eloqua.init().then(() => {
      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.forms.data.delete(1, 1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request
            .respondWith({
              status: 200,
              response: 'Deleted.'
            })
            .then(() => {
              expect(onFulfilled.getCall(0).args[0].data).to.eql('Deleted.');
            })
            .then(done);
        });
      });
    });
  });

  /** @test {FormData#delete} */
  it('Form Data Delete with Error', done => {
    let eloqua = new EloquaApi(getOptions({ sitename: 'test' }));
    eloqua
      .init()
      .then(() => {
        eloqua.assets.forms.data.delete(1, 1).then(form => {
          expect(form).to.eql('401: Unauthorized');
        });
      })
      .then(done);
  });
});
