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
   * Retrieve Visitor Fields
   * @method fields
   * @param {Object} [querystring]
   * @param {number} [querystring.count]
   * @param {number} [querystring.page]
   * @return {Object|String}
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
        uri: '/visitor/fields',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Visitor Data
   * @method get
   * @param {Object} [querystring]
   * @param {number} [querystring.count]
   * @param {string} [querystring.depth]
   * @param {string} [querystring.orderBy]
   * @param {number} [querystring.page]
   * @param {string} [querystring.search]
   * @return {Object|String}
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
        uri: '/assets/visitors',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = Visitors;

