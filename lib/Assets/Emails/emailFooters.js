'use strict';
/**
 * @module
 */

/** EmailFooters Class */
export default class EmailFooters {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Email Footers
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
      uri: '/assets/email/footers',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Email Footer
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
      uri: `/assets/email/footer/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Email Footer
   * @param {emailFooter} emailFooter
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(emailFooter, cb) {
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
      emailFooter,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/email/footer',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Email Footer
   * @param {number} id ID of segment
   * @param {emailFooter} emailFooter
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, emailFooter, cb) {
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
      emailFooter,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/footer/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Email Footer
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/footer/${id}`,
      method: 'delete',
    }, cb);
  }
}

