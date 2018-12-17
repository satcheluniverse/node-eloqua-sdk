'use strict';

/**
 * @ignore
 * @type {CustomObjectExports}
 */
let CustomObjectExports = require('./exports');
/**
 * @ignore
 * @type {CustomObjectImports}
 */
let CustomObjectImports = require('./imports');
/**
 * @ignore
 * @type {CustomObjectFields}
 */
let CustomObjectFields = require('./fields');
/**
 * @ignore
 * @type {CustomObjectSyncAction}
 */
let CustomObjectSyncActions = require('./syncActions');

/**
 * Campaign Responses Class
 * @class CustomObjects
 * @main EloquaApi
 * @exports CustomObjects
 * @constructor
 */
class CustomObjects {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
    this.exports = new CustomObjectExports(options);
    this.imports = new CustomObjectImports(options);
    this.fields = new CustomObjectFields(options);
    this.syncActions = new CustomObjectSyncActions(options);
  }

  /**
   * Retrieve a list of custom objects
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/customObjects',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a custom object
   * @method getOne
   * @param {Number} parentId
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-get.html
   */
  async getOne(parentId) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = CustomObjects;
