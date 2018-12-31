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
      uri: '/assets/email/headers',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Email Header
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
      uri: `/assets/email/header/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Email Header
   * @param {emailHeader} emailHeader
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {emailHeader} emailHeader
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/header/${id}`,
      method: 'delete',
    }, cb);
  }
}

