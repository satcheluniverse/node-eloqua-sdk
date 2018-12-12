let chai = require('chai');
let EloquaApi = require('../lib/eloqua.js');

exports.expect = chai.expect;

exports.EloquaApi = EloquaApi;
let ELOQUA_SITENAME = process.env.ELOQUA_SITENAME || 'somesitename';
let ELOQUA_USERNAME = process.env.ELOQUA_USERNAME || 'someusername';
let ELOQUA_PASSWORD = process.env.ELOQUA_PASSWORD || 'somepassword';
let ELOQUA_BASEURL = process.env.ELOQUA_BASEURL || 'https://secure.eloqua.com';
let CLIENT_ID = process.env.CLIENT_ID || 'someclientid';
let CLIENT_SECRET = process.env.CLIENT_SECRET || 'someclientsecret';

exports.getOptions = function (options) {
  const actualOptions = options || {};
  return {
    baseURL: (typeof actualOptions.baseURL !== 'undefined') ? actualOptions.baseURL : ELOQUA_BASEURL,
    sitename: (typeof actualOptions.sitename !== 'undefined') ? actualOptions.sitename : ELOQUA_SITENAME,
    username: (typeof actualOptions.username !== 'undefined') ? actualOptions.username : ELOQUA_USERNAME,
    password: (typeof actualOptions.password !== 'undefined') ? actualOptions.password : ELOQUA_PASSWORD,
    restVersion: actualOptions.restVersion,
    bulkVersion: actualOptions.bulkVersion,
    request: actualOptions.request,
    oauth: actualOptions.oauth,
    timeout: actualOptions.timeout,
    isTest: actualOptions.isTest,
  };
};

exports.globals = {
  ELOQUA_BASEURL,
  ELOQUA_SITENAME,
  ELOQUA_USERNAME,
  ELOQUA_PASSWORD,
  CLIENT_ID,
  CLIENT_SECRET
};
