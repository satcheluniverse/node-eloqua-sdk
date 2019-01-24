'use strict';
/**
 * @module
 */

/** Activities Fields Class */
export default class ActivitiesFields {
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
  }

  /**
   * Retrieve a list of activity field definitions
   * @param {Object} [querystring] querystring params to include in request
   * @param {String} [querystring.activityType]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-fields-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(
        ['activityType', 'limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'],
        querystring,
      );
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/activities/fields',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an activity field definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-fields-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/activities/fields/${id}`,
    }, cb);
  }
}

