'use strict';

/**
 * Import Priorities Class
 * @class ImportPriorities
 * @main EloquaApi
 * @exports ImportPriorities
 * @constructor
 */
class ImportPriorities {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of import priorities
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-imports-priorities-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/imports/priorities',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an import priority
   * @method getData
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-imports-priorities-id-get.html
   */
  async getData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/imports/priorities/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ImportPriorities;
