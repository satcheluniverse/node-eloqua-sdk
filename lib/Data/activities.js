'use strict';
/**
 * @module
 */

/** Activities Class */
export default class Activities {
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
   * Retrieve a list of activities
   * @param {number} id ID of segment
   * @param {Object} querystring
   * @param {number} [querystring.count]
   * @param {number} querystring.endDate
   * @param {number} querystring.startDate
   * @param {string} querystring.type
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-1.0-data-activities-contact-id-get.html
   */
  get(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'endDate', 'startDate', 'type'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/data/activities/contact/${id}`,
      qs: qs,
    }, cb);
  }
}

