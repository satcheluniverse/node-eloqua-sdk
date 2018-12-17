'use strict';

/**
 * @external {axios} https://github.com/axios/axios
 */
let axios = require('axios');
/**
 * @ignore
 * @type {Appcloud}
 */
let Appcloud = require('./Extensions/appcloud');
/**
 * @ignore
 * @type {Assets}
 */
let Assets = require('./Extensions/assets');
/**
 * @ignore
 * @type {Bulk}
 */
let Bulk = require('./Extensions/bulk');
/**
 * @ignore
 * @type {Data}
 */
let Data = require('./Extensions/data');
/**
 * @ignore
 * @type {System}
 */
let System = require('./Extensions/system');

//TODO: Account Fields, Account Views
//TODO: Campaign Recent, Campaign Folders
//TODO: Contact Fields, Contact Filter Folders, Contact List Folders, Contact Scoring, Contact Segment Recent, Contact Update Rule Sets, Contact Views
//TODO: Content Section Folders
//TODO: Dynamic Content, Dynamic Content Folders
//TODO: Email Config, Email Footer Folders, Email Header Folders, Email Signatures, Email Recent, Email Folders, Email Signature Folders
//TODO: Favorite Campaign, Favorite Contact Scoring Model, Favorite Contact Segment, Favorite Email, Favorite Form, Favorite Landing Page, Favorite Program
//TODO: Field Merge, Field Merge Folders
//TODO: Forms Recent, Forms Folders
//TODO: Hyperlink Folders
//TODO: Image Folders
//TODO: Imported File Folders
//TODO: Landing Page Recent, Landing Page Folders
//TODO: Programs Recent, Program Folders
//TODO: SSL Certificates
//TODO: Data Report
//TODO: Internal Audit Log
//TODO: Internal eloquaUI
//TODO: Internal Sales Tools
//TODO: Settings Campaign, Settings Campaign Response Activities, Settings User Recent Items
//TODO: System Import Sources, System Scheduled Tasks, System Security Keys
//TODO: AppCloud

/**
 * Wrapper for Eloqua API
 * @class EloquaApi
 * @main EloquaApi
 * @exports EloquaApi
 * @module EloquaApi
 * @constructor
 */
class EloquaApi {

  /**
   * Standard constructor
   * @method constructor
   * @param {Object} options
   * @param {String} [options.baseURL=https://secure.eloqua.com] Eloqua base URL as retrieved by
   * https://login.eloqua.com/id
   * @param {String} [options.sitename] Eloqua sitename
   * @param {String} [options.username] Eloqua username
   * @param {String} [options.password] Eloqua password
   * @param {Number} [options.timeout] Timeout for HTTP calls
   * @param {Object} [options.oauth] OAuth object variables
   * @param {String} [options.restVersion=2.0] REST API version to use
   * @param {String} [options.bulkVersion=2.0] Bulk API version to use
   * @param {Boolean} [options.isTest]
   */
  constructor(options) {
    /**
     * Last request made. Used for testing.
     * @property lastCall
     * @type {Object}
     */
    this.lastCall = null;
    /**
     * The number of API calls made by this library
     * @property apiCalls
     * @type {Number}
     */
    this.apiCalls = 0;
    /**
     * Is testing? Determines if requests should be made.
     * @property isTest
     * @type {Boolean}
     */
    this.isTest = options.isTest || false;
    /**
     * The last error thrown by axios
     * @property lastError
     * @type {Object}
     */
    this.lastError = null;
    /**
     * Options for axios library
     * @property baseOptions
     * @type {Object}
     */
    this.baseOptions = {};

    if (options.baseURL) {
      this.baseOptions.baseURL = options.baseURL;
    }

    if (options.sitename && options.username && options.password) {
      /**
       * Eloqua Sitename
       * @property sitename
       * @type {String}
       */
      this.sitename = options.sitename;
      /**
       * Eloqua Username
       * @property username
       * @type {String}
       */
      this.username = options.username;
      /**
       * Eloqua password
       * @property password
       * @type {String}
       */
      this.password = options.password;
      this.baseOptions.auth = {
        username: `${options.sitename}\\${options.username}`,
        password: options.password,
      };
    }

    if (options.timeout) {
      this.baseOptions.timeout = options.timeout;
    }

    if (options.oauth) {
      /**
       * Oauth object
       * @property oauth
       * @type {Object}
       */
      this.oauth = options.oauth;
    }

    /**
     * REST API version to use
     * @property restVersion
     * @type {String}
     */
    this.restVersion = (options.restVersion) ? options.restVersion : '2.0';
    /**
     * Bulk API version to use
     * @property bulkVersion
     * @type {String}
     */
    this.bulkVersion = (options.bulkVersion) ? options.bulkVersion : '2.0';
  }

  _PromiseTimeout(delayms, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, delayms);
    });
  }

  /**
   * Initialize function to set options
   * @method init
   */
  async init() {
    if (this.oauth) {
      if (this.oauth.token_type && this.oauth.access_token) {
        this.setHeaders('Authorization', this.oauth.token_type + ' ' +
          this.oauth.access_token);
      } else if (this.oauth.client_id && this.oauth.client_secret && this.sitename &&
        this.username && this.password) {
        await this.getPasswordBearer(this.sitename,
          this.username, this.password);
      }
    }

    if (!this.baseOptions.baseURL) {
      await this.getBaseURL();
    }

    /**
     * Axios http request library
     * @type {axios}
     * @property request
     */
    this.request = await axios.create(this.baseOptions);
    /**
     * @property appcloud
     * @type {Appcloud}
     */
    this.appcloud = new Appcloud(this);
    /**
     * @property assets
     * @type {Assets}
     */
    this.assets = new Assets(this);
    /**
     * @property bulk
     * @type {Bulk}
     */
    this.bulk = new Bulk(this);
    /**
     * @property data
     * @type {Data}
     */
    this.data = new Data(this);
    /**
     * @property system
     * @type {System}
     */
    this.system = new System(this);
  }

  /**
   * Handle Errors from Eloqua
   * @method _throwError
   * @param {Object} error - Error object containing info about error
   * @return {String}
   * @private
   */
  async _throwError(error) {
    let message = '';
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      message = error.response.status + ': ' + error.response.statusText;
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      // console.log(error.request);
      message = 'Error in request';
    } else {
      // Something happened in setting up the request that triggered an Error
      // console.log('Error', error.message);
      message = error.message;
    }

    // console.log(error.config);
    this.lastError = error;
    return message;
  }

  /**
   * Authenticates using a resource owner password credentials grant
   * @method getPasswordBearer
   * @param {String} sitename
   * @param {String} username
   * @param {String} password
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
        auth: {username: this.oauth.client_id, password: this.oauth.client_secret}
      });
      this.oauth.token_type = response.data.token_type;
      this.oauth.expires = response.data.expires;
      this.oauth.refresh_token = response.data.refresh_token;
      this.oauth.access_token = response.data.access_token;
      await this.setHeaders('Authorization', this.oauth.token_type + ' ' +
        this.oauth.access_token);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        await this._throwError(error);
        await this._PromiseTimeout(70000, this.getPasswordBearer(sitename, username, password));
      } else {
        await this._throwError(error);
      }
    }
  }

  /**
   * Sets headers for baseOptions and request if present
   * @method setHeaders
   * @param {String} name - name of header pair
   * @param {String} value - value of header pair
   */
  setHeaders(name, value) {
    if (!this.baseOptions.headers) {
      this.baseOptions.headers = {};
    }
    this.baseOptions.headers[name] = value;
    if (this.request && this.request.defaults && this.request.defaults.headers) {
      this.request.defaults.headers[name] = value;
    }
  }

  /**
   * Grabs baseUrl from Eloqua login data
   * @method getBaseURL
   */
  async getBaseURL() {
    const url = 'https://login.eloqua.com/id';
    const response = await axios.get(url, this.baseOptions);
    if (response && response.data && response.data.urls && response.data.urls.base) {
      this.baseOptions.baseURL = response.data.urls.base;
      if (this.request && this.request.defaults) {
        this.request.defaults.baseURL = this.baseOptions.baseURL;
      }
    } else {
      this.baseOptions.baseURL = 'https://secure.eloqua.com';
      if (this.request && this.request.defaults) {
        this.request.defaults.baseURL = this.baseOptions.baseURL;
      }
    }
  }

  /**
   * Execute request to Eloqua
   * @method _request
   * @param {Object} params - Parameters to call Eloqua API
   * @param {String} params.api - API to use (REST or Bulk)
   * @param {String} params.uri - URI to call (after the baseURL + API Version)
   * @param {Object} [params.qs] - Querystring object pair to append to URI
   * @param {String} [params.method=get] - HTTP Verb to use
   * @param {String} [params.data] - Data for POST and PUT calls
   * @param {Object} [params.options={}] - Addition options to pass to axios
   * @return {Object}
   * @private
   */
  async _request({api, uri, qs, method = 'get', data, options = {}}) {
    let url = uri;

    if (!this.request.defaults.baseURL) {
      await this.getBaseURL();
    }

    if (api === 'REST') {
      url = '/API/REST/' + this.restVersion + url;
    } else if (api === 'Bulk') {
      url = '/API/Bulk/' + this.bulkVersion + url;
    }

    if (qs) {
      options.params = qs;
    }

    this.apiCalls += 1;
    if (data) {
      let response = await this.request[method](url, data, options);
      if (this.isTest) {
        this.lastCall = response;
        return response;
      } else {
        return response.data;
      }
    } else {
      let response = await this.request[method](url, options);
      if (this.isTest) {
        this.lastCall = response;
        return response;
      } else {
        return response.data;
      }
    }
  }

  /**
   * Ensures given properties of object
   * @method _validate
   * @param {Array} accepted
   * @param {Object} input
   * @return {Object}
   * @private
   */
  _validate(accepted, input) {
    let output = {};
    accepted.forEach(value => {
      if (input[value]) {
        output[value] = input[value];
      }
    });
    return output;
  }
}

module.exports = EloquaApi;
