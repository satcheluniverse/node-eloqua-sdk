let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {Events} */
describe('Bulk Event Tests', () => {

  /** @test {Events#get} */
  it('Event Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.events.get({limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {Events#get} */
  it('Event Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.events.get().then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {Events#getOne} */
  it('Event Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.events.get({limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.events.getOne(results.items[0].uri.replace('/events/','')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {Events#getOne} */
  it('Event Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.events.getOne(1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  require('./exports.test');
  require('./imports.test');
  require('./fields.test');
});
