'use strict';
/**
 * @module
 */

/** EmailHeaders Class */
export default class EmailHeaders {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Email Headers
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/email/headers',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Email Header
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/header/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Email Header
   * @param {emailHeader} emailHeader
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(emailHeader, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'body',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldMerges',
        'hyperlinks',
        'id',
        'name',
        'permissions',
        'text',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      emailHeader,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/email/header',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Email Header
   * @param {number} id ID of segment
   * @param {emailHeader} emailHeader
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, emailHeader, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'body',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'fieldMerges',
        'hyperlinks',
        'id',
        'name',
        'permissions',
        'text',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      emailHeader,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/header/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Email Header
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/header/${id}`,
      method: 'delete',
    }, cb);
  }
}

