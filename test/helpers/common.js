export Eloqua from '../../lib/Eloqua';

const ELOQUA_SITENAME = process.env.ELOQUA_SITENAME || 'somesitename';
const ELOQUA_USERNAME = process.env.ELOQUA_USERNAME || 'someusername';
const ELOQUA_PASSWORD = process.env.ELOQUA_PASSWORD || 'somepassword';
const ELOQUA_BASEURL = process.env.ELOQUA_BASEURL || 'https://secure.eloqua.com';
const CLIENT_ID = process.env.CLIENT_ID || 'someclientid';
const CLIENT_SECRET = process.env.CLIENT_SECRET || 'someclientsecret';

export function getOptions(options) {
  const actualOptions = options || {};
  return {
    baseURL: typeof actualOptions.baseURL !== 'undefined' ? actualOptions.baseURL : ELOQUA_BASEURL,
    sitename: typeof actualOptions.sitename !== 'undefined' ? actualOptions.sitename : ELOQUA_SITENAME,
    username: typeof actualOptions.username !== 'undefined' ? actualOptions.username : ELOQUA_USERNAME,
    password: typeof actualOptions.password !== 'undefined' ? actualOptions.password : ELOQUA_PASSWORD,
    restVersion: actualOptions.restVersion,
    bulkVersion: actualOptions.bulkVersion,
    request: actualOptions.request,
    oauth: actualOptions.oauth,
    timeout: actualOptions.timeout,
    isTest: typeof actualOptions.isTest !== 'undefined' ? actualOptions.isTest : true,
  };
}

export const globalConfig = {
  ELOQUA_BASEURL,
  ELOQUA_SITENAME,
  ELOQUA_USERNAME,
  ELOQUA_PASSWORD,
  CLIENT_ID,
  CLIENT_SECRET,
};
