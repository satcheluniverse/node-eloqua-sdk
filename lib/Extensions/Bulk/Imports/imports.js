'use strict';

/**
 * @ignore
 * @type {ImportPriorities}
 */
let ImportPriorities = require('./priorities');

/**
 * Imports Class
 * @class Imports
 * @main EloquaApi
 * @exports Imports
 * @constructor
 */
class Imports {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
    this.priorities = new ImportPriorities(options);
  }

  /**
   * Retrieve a list of imports
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-imports-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/imports',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Discover the amount of database space your imports are using
   * @method getData
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-imports-data-get.html
   */
  async getData() {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/imports/data',
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Imports;
