let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;
let moxios = require('moxios');
let sinon = require('sinon');

/** @test {Programs} */
describe('Program Tests', () => {

  /** @test {Programs#get} */
  it('Program Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.programs.get({count: 1}).then((program) => {
        expect(program).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Programs#get} */
  it('Program Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.assets.programs.get().then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#getOne} */
  it('Program Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.programs.get({count: 1}).then((programs) => {
        expect(programs).to.be.an('Object');
        eloqua.assets.programs.getOne(programs.elements[0].id).then((program) => {
          expect(program).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Programs#getOne} */
  it('Program Get One with Querystring', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.assets.programs.get({count: 1}).then((programs) => {
        expect(programs).to.be.an('Object');
        eloqua.assets.programs.getOne(programs.elements[0].id, {depth: 'minimal'}).then((program) => {
          expect(program).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Programs#getOne} */
  it('Program Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.getOne(1).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#create} */
  it('Program Create', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.programs.create(data).then(onFulfilled);
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

  /** @test {Programs#create} */
  it('Program Create with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.create(data).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#update} */
  it('Program Update', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.programs.update(1, data).then(onFulfilled);
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

  /** @test {Programs#update} */
  it('Program Update with Error', (done) => {
    let data = {
      name: 'Test'
    };
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.update(1, data).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#delete} */
  it('Program Delete', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.programs.delete(1).then(onFulfilled);
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

  /** @test {Programs#delete} */
  it('Program Delete with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.delete(1).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#activate} */
  it('Program Activate', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.programs.activate(1).then(onFulfilled);
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

  /** @test {Programs#activate} */
  it('Program Activate with Error and Querystring', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.activate(1, {activateNow: true}).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#deactivate} */
  it('Program Deactivate', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.programs.deactivate(1).then(onFulfilled);
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

  /** @test {Programs#deactivate} */
  it('Program Deactivate with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.deactivate(1).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Programs#pause} */
  it('Program Pause', (done) => {
    let eloqua = new EloquaApi(getOptions({isTest: true}));
    eloqua.init().then(() => {

      moxios.install(eloqua.request);

      moxios.withMock(() => {
        let onFulfilled = sinon.spy();
        eloqua.assets.programs.pause(1).then(onFulfilled);
        moxios.wait(() => {
          let request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: 'Paused.'
          }).then(() => {
            expect(onFulfilled.getCall(0).args[0].data).to.eql('Paused.');
          }).then(done);
        });
      });
    });
  });

  /** @test {Programs#pause} */
  it('Program Pause with Error', (done) => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.assets.programs.pause(1).then((program) => {
        expect(program).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
