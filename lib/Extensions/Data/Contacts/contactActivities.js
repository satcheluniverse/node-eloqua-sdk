'use strict';

/**
 * ContactActivities Class
 * @class ContactActivities
 * @main EloquaApi
 * @exports ContactActivities
 */
class ContactActivities {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Single Contact
   * @method get
   * @param {number} id
   * @param {Object} [querystring]
   * @param {number} [querystring.count]
   * @param {number} [querystring.endDate]
   * @param {number} [querystring.startDate]
   * @param {string} [querystring.type]
   * @return {Object|String}
   */
  async get(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'endDate', 'startDate', 'type'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/activities/contact/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = ContactActivities;

