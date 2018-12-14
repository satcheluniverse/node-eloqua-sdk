'use strict';

/**
 * Visitors Class
 * @class Visitors
 * @main EloquaApi
 * @exports Visitors
 */
class Visitors {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of visitor profile fields
   * @method fields
   * @param {Object} [querystring]
   * @param {number} [querystring.count]
   * @param {number} [querystring.page]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-2.0-assets-visitor-fields-get.html
   */
  async fields(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'page'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/visitor/fields',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve visitor data
   * @method get
   * @param {Object} [querystring]
   * @param {number} [querystring.count]
   * @param {string} [querystring.depth]
   * @param {string} [querystring.orderBy]
   * @param {number} [querystring.page]
   * @param {string} [querystring.search]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-2.0-data-visitors-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'orderBy', 'page', 'search'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/data/visitors',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = Visitors;

