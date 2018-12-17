'use strict';

/**
 * Activities Class
 * @class Activities
 * @main EloquaApi
 * @exports Activities
 */
class Activities {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of activities
   * @method get
   * @param {number} id
   * @param {Object} querystring
   * @param {number} [querystring.count]
   * @param {number} querystring.endDate
   * @param {number} querystring.startDate
   * @param {string} querystring.type
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-1.0-data-activities-contact-id-get.html
   */
  async get(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'endDate', 'startDate', 'type'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/activities/contact/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Activities;
