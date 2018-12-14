let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {Visitors} */
describe('Visitor Tests', () => {

  /** @test {Visitors#get} */
  it('Visitor Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.visitors.get({count: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Visitors#get} */
  it('Visitor Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.visitors.get().then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });

  /** @test {Visitors#fields} */
  it('Visitor Fields', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.data.visitors.fields({count: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Visitors#fields} */
  it('Visitor Fields with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.data.visitors.fields().then((result) => {
        expect(result).to.eql('401: Unauthorized');
      });
    }).then(done);
  });
});
