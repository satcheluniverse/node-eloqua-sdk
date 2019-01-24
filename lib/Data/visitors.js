'use strict';
/**
 * @module
 */

/** Visitors Class */
export default class Visitors {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;

  /**
   * Constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve a list of visitor profile fields
   * @param {Object} [querystring] querystring params to include in request
   * @param {number} [querystring.count]
   * @param {number} [querystring.page]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-2.0-assets-visitor-fields-get.html
   */
  fields(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/visitor/fields',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve visitor data
   * @param {Object} [querystring] querystring params to include in request
   * @param {number} [querystring.count]
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {string} [querystring.orderBy]
   * @param {number} [querystring.page]
   * @param {string} [querystring.search]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-2.0-data-visitors-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/data/visitors',
      qs: qs,
    }, cb);
  }
}

