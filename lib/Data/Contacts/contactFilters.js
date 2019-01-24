'use strict';
/**
 * @module
 */

/** ContactFilters Class */
export default class ContactFilters {
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
   * Retrieve Contacts from Filter
   * @param {number} id ID of filter
   * @param {number} viewId ID of contact view
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  get(id, viewId, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/data/contact/view/${viewId}/contacts/filter/${id}`,
      qs: qs,
    }, cb);
  }
}

