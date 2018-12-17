let common = require('./common');

/* GLOBALS expect */
global.expect = common.expect;
global.common = common;

describe('Eloqua API Tests', function() {
  this.slow(5000);
  this.timeout(10000);
  // this.retries(3);
  require('./tests/constructor.test');
  require('./tests/misc.test');
  require('./tests/appcloud.test');
  require('./tests/assets.test');
  require('./tests/bulk.test');
  require('./tests/data.test');
  require('./tests/system.test');
});
