let EloquaApi = common.EloquaApi;
let getOptions = common.getOptions;

/** @test {EventFields} */
describe('Event Field Tests', () => {

  let parentId;

  before((done) => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.events.get({count: 1}).then((customObject) => {
        parentId = customObject.items[0].uri.replace('/events/', '');
      }).then(done);
    });
  });

  /** @test {EventFields#get} */
  it('Event Field Get', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.events.fields.get(parentId,{limit: 1}).then((result) => {
        expect(result).to.be.an('Object');
      });
    }).then(done);
  });

  /** @test {EventFields#get} */
  it('Event Field Get with invalid credentials', done => {
    let eloqua = new EloquaApi(getOptions({baseURL: null, password: null}));
    eloqua.init().then(() => {
      eloqua.bulk.events.fields.get(parentId).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });

  /** @test {EventFields#getOne} */
  it('Event Field Get One', done => {
    let eloqua = new EloquaApi(getOptions());
    eloqua.init().then(() => {
      eloqua.bulk.events.fields.get(parentId, {limit: 1}).then((results) => {
        expect(results).to.be.an('Object');
        eloqua.bulk.events.fields.getOne(parentId, results.items[0].uri.replace(`/events/${parentId}/fields/`,'')).then((result) => {
          expect(result).to.be.an('Object');
        });
      });
    }).then(done);
  });

  /** @test {EventFields#getOne} */
  it('Event Field Get One with invalid Id', done => {
    let eloqua = new EloquaApi(getOptions({sitename: 'test'}));
    eloqua.init().then(() => {
      eloqua.bulk.events.fields.getOne(parentId,1).then((result) => {
        expect(result).to.eql('401: You are not authorized to make this request.');
      });
    }).then(done);
  });
});
