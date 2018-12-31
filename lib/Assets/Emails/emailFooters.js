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
   * @param {querystring} [querystring]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {emailFooter} emailFooter
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/footer/${id}`,
      method: 'delete',
    }, cb);
  }
}

