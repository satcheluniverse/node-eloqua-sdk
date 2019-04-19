'use strict';
/**
 * Eloqua
 * @module Eloqua
 */

/**
 * @external axios
 * @see https://github.com/axios/axios
 */
import axios from 'axios';
import debug from 'debug';
import deepmerge from 'deepmerge';
import Appcloud from './appcloud';
import Assets from './assets';
import Bulk from './bulk';
import Data from './data';
import System from './system';

const log = debug('eloqua:request');

/** Custom Error for axios responses */
class ResponseError extends Error {
  /**
   * Construct a new ResponseError
   * @param {string} message an message to return instead of the the default error message
   * @param {string} path the requested path
   * @param {Object} response the object returned by Axios
   */
  constructor(message, path, response) {
    super(message);
    this.path = path;
    this.request = response.config;
    this.response = (response || {}).response || response;
    this.status = response.status;
  }
}

// TODO: Account Fields, Account Views
// TODO: Contact Fields, Contact Views, Contact Update Rule Sets
// TODO: Contact Scoring: Model, Active, Recent
// TODO: Dynamic Content
// TODO: Email Config, Email Signatures
// TODO: Field Merge
// TODO: SSL Certificates
// TODO: Data Report
// TODO: Internal Audit Log
// TODO: Internal eloquaUI
// TODO: Internal Sales Tools
// TODO: Settings Campaign, Settings Campaign Response Activities, Settings User Recent Items
// TODO: System Import Sources, System Scheduled Tasks, System Security Keys
// TODO: AppCloud
//  https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAB/Developers/AppCloud/Endpoints/app-developer-endpoints.htm

/**
 * Wrapper for Eloqua API
 */
export default class Eloqua {
  /**
   * Eloqua Sitename
   * @member {String}
   */
  #sitename = null;
  /**
   * Eloqua Username
   * @member {String}
   */
  #username = null;
  /**
   * Eloqua password
   * @member {String}
   */
  #password = null;
  /**
   * Oauth object
   * @member {Object}
   */
  #oauth = null;
  /**
   * Axios http request library
   * @member {axios}
   */
  #request = null;

  /** Standard constructor
   * @param {Object} options Options object to configure class
   * @param {?String} [options.baseURL=https://secure.eloqua.com] Eloqua base URL as retrieved by
   * https://login.eloqua.com/id
   * @param {?String} [options.sitename] Eloqua sitename
   * @param {?String} [options.username] Eloqua username
   * @param {?String} [options.password] Eloqua password
   * @param {?Number} [options.timeout] Timeout for HTTP calls
   * @param {?Object} [options.oauth] OAuth object variables
   * @param {?String} [options.restVersion=2.0] REST API version to use
   * @param {?String} [options.bulkVersion=2.0] Bulk API version to use
   */
  constructor(options) {
    // TODO: Convert options to PRIVATE!
    /**
     * The number of API calls made by this library
     * @member {Number}
     */
    this.apiCalls = 0;
    /**
     * The last error thrown by axios
     * @member {Object}
     */
    this.lastError = {};
    /**
     * Options for axios library
     * @member {Object}
     */
    this.axiosOptions = {headers: {}};
    /**
     * REST API version to use
     * @member {String}
     */
    this.restVersion = options && options.restVersion ? options.restVersion : '2.0';
    /**
     * Bulk API version to use
     * @member {String}
     */
    this.bulkVersion = options && options.bulkVersion ? options.bulkVersion : '2.0';

    this.#request = axios.create();

    if (options && options.baseURL) {
      this.axiosOptions.baseURL = options.baseURL;
    }

    if (options && options.timeout) {
      this.axiosOptions.timeout = options.timeout;
    }

    if (options && options.sitename && options.username && options.password) {
      this.#sitename = options.sitename;
      this.#username = options.username;
      this.#password = options.password;
      if (!options.oauth) {
        this.axiosOptions.auth = {
          username: `${options.sitename}\\${options.username}`,
          password: options.password,
        };
      }
    }

    if (options && options.oauth) {
      this.#oauth = options.oauth;
    }
    /**
     * @member {module:Appcloud}
     */
    this.appcloud = new Appcloud(this);
    /**
     * @member {module:Assets}
     */
    this.assets = new Assets(this);
    /**
     * @member {module:Bulk}
     */
    this.bulk = new Bulk(this);
    /**
     * @member {module:Data}
     */
    this.data = new Data(this);
    /**
     * @member {module:System}
     */
    this.system = new System(this);
  }

  /**
   * Handle Errors from Eloqua
   * @param {Object} object Error object containing info about error
   * @param {String} path the requested path
   * @returns {Error} Error Message
   * @deprecated
   * @private
   */
  _throwError(object, path) {
    let error = '';
    if (object.config && object.response && object.response.status && object.response.statusText) {
      const {response: {status, statusText}, config: {method, url}} = object;
      const message = (`${status} error making ${method} request to ${url}: "${statusText}"`);
      error = new ResponseError(message, path, object);
      log(`${message} ${JSON.stringify(object.data)}`);
    } else if (object.hasOwnProperty('config') && object.hasOwnProperty('request')) {
      const {config: {method, url}} = object;
      const message = (`Internal request error making ${method} request to ${url}`);
      error = new ResponseError(message, path, object);
      log(`${message} ${JSON.stringify(object.data)}`);
    } else {
      error = object;
    }
    log('throwing error');
    this.lastError = error;
    throw error;
  }

  /**
   * Authenticates using a resource owner password credentials grant
   * @param {String} sitename Eloqua Sitename
   * @param {String} username Eloqua Username
   * @param {String} password Eloqua Password
   * @returns {Null} No Return
   */
  async getPasswordBearer(sitename, username, password) {
    const url = 'https://login.eloqua.com/auth/oauth2/token';
    const data = {
      grant_type: 'password',
      scope: 'full',
      username: `${sitename}\\${username}`,
      password: password,
    };
    try {
      const response = await axios.post(url, data, {
        auth: {
          username: this.#oauth.client_id,
          password: this.#oauth.client_secret,
        },
      });
      this.#oauth.token_type = response.data.token_type;
      this.#oauth.expires = response.data.expires;
      this.#oauth.refresh_token = response.data.refresh_token;
      this.#oauth.access_token = response.data.access_token;
      await this.setHeaders('Authorization', this.#oauth.token_type + ' ' + this.#oauth.access_token);
    } catch (error) {
      await this._throwError(error, 'https://login.eloqua.com/auth/oauth2/token');
    }
  }

  /**
   * Sets headers for axiosOptions and request if present
   * @param {String} name name of header pair
   * @param {String} value value of header pair
   * @returns {Null} No Return
   */
  setHeaders(name, value) {
    if (!this.axiosOptions.headers) {
      this.axiosOptions.headers = {};
    }
    this.axiosOptions.headers[name] = value;
  }

  /**
   * Grabs baseUrl from Eloqua login data
   * @param {Function} [cb] callback
   * @returns {?String} Returns baseURL
   */
  async getBaseURL(cb) {
    log('Getting BaseURL');
    if (!this.axiosOptions.baseURL || this.axiosOptions.baseURL === null) {
      log('No BaseURL found');
      const url = 'https://login.eloqua.com/id';
      const requestPromise = axios.get(url, this.axiosOptions)
        .catch(callbackErrorOrThrow(cb, 'https://login.eloqua.com/id'));

      return requestPromise.then((response) => {
        if (response.data && Object.keys(response.data).length > 0) {
          this.axiosOptions.baseURL = response.data.urls.base;
          log(`BaseURL: ${this.axiosOptions.baseURL}`);
          if (cb) {
            cb(null, this.axiosOptions.baseURL, requestPromise);
          } else {
            return this.axiosOptions.baseURL;
          }
        } else {
          callbackErrorOrThrow(cb, 'https://login.eloqua.com/id');
        }
      });
    } else {
      log(`BaseURL: ${this.axiosOptions.baseURL}`);
      if (cb) {
        cb(null, this.axiosOptions.baseURL, null);
      }
      return this.axiosOptions.baseURL;
    }
  }

  /**
   * Sets Auth based on OAuth and Basic
   * @returns {Promise<void>} Void return but sets internal config
   */
  async getAuth() {
    log('Getting Auth');
    if (!this.axiosOptions.auth && (!this.axiosOptions.headers || !this.axiosOptions.headers.Authorization)) {
      log('No Auth found');
      if (this.#oauth) {
        if (this.#oauth.token_type && this.#oauth.access_token) {
          log('Setting Oauth Access Token');
          this.setHeaders('Authorization', this.#oauth.token_type + ' ' + this.#oauth.access_token);
        } else if (this.#oauth.client_id &&
          this.#oauth.client_secret && this.#sitename && this.#username && this.#password) {
          log('Getting Password Bearer');
          await this.getPasswordBearer(this.#sitename, this.#username, this.#password);
        } else {
          log('OAuth Error');
        }
      } else if (this.#sitename && this.#username && this.#password) {
        log('Setting Basic Auth');
        this.axiosOptions.auth = {
          username: `${this.#sitename}\\${this.#username}`,
          password: this.#password,
        };
      } else {
        log('Auth Error');
      }
    } else {
      log('Auth Found');
    }
  }

  /**
   * Gets path with api version
   * @param {String} api API to use (REST or Bulk)
   * @param {String} uri Path to call (not including baseURL + API Version)
   * @returns {string} path to pass to axios
   * @private
   */
  _getURL(api, uri) {
    let path = uri;

    if (api === 'REST') {
      path = '/API/REST/' + this.restVersion + uri;
    } else if (api === 'Bulk') {
      path = '/API/Bulk/' + this.bulkVersion + uri;
    }

    return path;
  }

  /**
   * Execute request to Eloqua
   * @param {Object} params Parameters to call Eloqua API
   * @param {String} params.api API to use (REST or Bulk)
   * @param {String} params.path Path to call (not including baseURL + API Version)
   * @param {Object} [params.qs] Querystring object pair to append to URI
   * @param {String} [params.method=get] HTTP Verb to use
   * @param {String} [params.data] Data for POST and PUT calls
   * @param {Object} [params.options={}] Additional options to pass to axios
   * @param {Function} [cb] Callback
   * @return {Object} Body of response object
   */
  async _request({api, uri, qs, method = 'get', data, options = {}}, cb) {
    await this.getAuth();
    await this.getBaseURL();

    log('Auth and BaseURL retrieved');
    // Workaround for axios defaults until https://github.com/axios/axios/issues/1664 is resolved.
    const requestOptions = deepmerge(this.axiosOptions, options);

    requestOptions.url = this._getURL(api, uri);

    if (qs) {
      requestOptions.params = qs;
    }

    if (data) {
      requestOptions.data = data;
    }

    requestOptions.method = method;

    this.apiCalls += 1;
    log(`${requestOptions.method} request to ${requestOptions.baseURL}${requestOptions.url}`);
    const requestPromise = this.#request(requestOptions).catch(callbackErrorOrThrow(cb, requestOptions.url));

    if (cb) {
      requestPromise.then((response) => {
        if (response && response.data && Object.keys(response.data).length > 0) {
          cb(null, response.data, response);
        } else if (response && response.status && response.status < 300) {
          cb(null, response.status, response);
        } else {
          callbackErrorOrThrow(cb, requestOptions.url);
        }
      });
    }
    return requestPromise;
  }

  /**
   * Ensures given properties of object
   * @param {Array} accepted Array of accepted properties
   * @param {Object} input Object to be cleaned
   * @return {Object} Cleaned object with accepted properties
   * @private
   */
  _validate(accepted, input) {
    const output = {};
    accepted.forEach((value) => {
      if (input[value]) {
        output[value] = input[value];
      }
    });
    return output;
  }
}

function callbackErrorOrThrow(cb, path) {
  return function handler(object) {
    let error;
    if (object.config && object.response && object.response.status && object.response.statusText) {
      const {response: {status, statusText}, config: {method, url}} = object;
      const message = (`${status} error making ${method} request to ${url}: "${statusText}"`);
      error = new ResponseError(message, path, object);
      log(`${message} ${JSON.stringify(object.data)}`);
    } else if (object.hasOwnProperty('config') && object.hasOwnProperty('request')) {
      const {config: {method, url}} = object;
      const message = (`Internal request error making ${method} request to ${url}`);
      error = new ResponseError(message, path, object);
      log(`${message} ${JSON.stringify(object.data)}`);
    } else {
      error = object;
    }
    if (cb) {
      log('going to error callback');
      cb(error);
    } else {
      log('throwing error');
      throw error;
    }
  };
}

/**
 * A function that receives the result of the API request.
 * @callback Eloqua.callback
 * @param {Eloqua.Error} error the error returned by the API or `null`
 * @param {(Object|true)} result the data returned by the API or `true` if the API returns `204 No Content`
 * @param {Object} request the raw {@linkcode https://github.com/mzabriskie/axios#response-schema Response}
 */
