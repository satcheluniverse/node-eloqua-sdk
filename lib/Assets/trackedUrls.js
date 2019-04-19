'use strict';
/**
 * @module
 */

/** TrackedURLs Class */
export default class TrackedURLs {
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
   * Retrieve a list of tracked URLs
   * @param {Object} [querystring] querystring params to include in request
   * @param {number} [querystring.count]
   * @param {number} [querystring.page]
   * @param {string} [querystring.depth]
   * @param {string} [querystring.orderBy]
   * @param {string} [querystring.returnTotalCount]
   * @param {string} [querystring.search]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @experimental
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'page', 'depth', 'orderBy', 'returnTotalCount', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/trackedUrls',
      qs: qs,
    }, cb);
  }
}

