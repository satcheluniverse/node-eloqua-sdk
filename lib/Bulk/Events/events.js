'use strict';
/**
 * @module
 */

import EventExports from './exports';
import EventImports from './imports';
import EventFields from './fields';

/** Events Class */
export default class Events {
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
    this.exports = new EventExports(options);
    this.imports = new EventImports(options);
    this.fields = new EventFields(options);
  }

  /**
   * Retrieve a list of events
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/events',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an event
   * @param {Number} parentId
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-id-get.html
   */
  getOne(parentId, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/events/${parentId}`,
    }, cb);
  }
}

