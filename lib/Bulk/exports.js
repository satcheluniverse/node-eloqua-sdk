'use strict';
/**
 * @module
 */

/** Exports Class */
export default class Exports {
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
   * Retrieve a list of exports
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-exports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/exports',
      qs: qs,
    }, cb);
  }

  /**
   * Discover the amount of database space your exports are using
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-exports-data-get.html
   */
  getData(cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: '/exports/data',
    }, cb);
  }
}

