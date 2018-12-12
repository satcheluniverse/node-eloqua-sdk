'use strict';

/**
 * Contact Segments Class
 * @class ContactSegments
 * @main EloquaApi
 * @exports ContactSegments
 * @constructor
 */
class ContactSegments {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of contact segments
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-segments-get.html
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
        uri: '/contacts/segments',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a contact segment
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-segments-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/contacts/segments/${id}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ContactSegments;
