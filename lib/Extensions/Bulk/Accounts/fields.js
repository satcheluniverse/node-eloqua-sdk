'use strict';

/**
 * Account Fields Class
 * @class AccountFields
 * @main EloquaApi
 * @exports AccountFields
 * @constructor
 */
class AccountFields {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of account field definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-fields-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/accounts/fields',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an account field definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-accounts-fields-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/accounts/fields/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = AccountFields;
