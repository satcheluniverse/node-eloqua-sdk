'use strict';
/**
 * @module
 */

import CustomObjectExports from './exports';
import CustomObjectImports from './imports';
import CustomObjectFields from './fields';
import CustomObjectSyncActions from './syncActions';

/** Campaign Responses Class */
export default class CustomObjects {
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
    this.exports = new CustomObjectExports(options);
    this.imports = new CustomObjectImports(options);
    this.fields = new CustomObjectFields(options);
    this.syncActions = new CustomObjectSyncActions(options);
  }

  /**
   * Retrieve a list of custom objects
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: '/customObjects',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a custom object
   * @param {Number} parentId
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-get.html
   */
  getOne(parentId, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}`,
    }, cb);
  }
}

