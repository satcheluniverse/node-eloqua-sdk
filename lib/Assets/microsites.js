'use strict';
/**
 * @module
 */

/** Microsites Class */
export default class Microsites {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Microsites
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
      uri: '/assets/microsites',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Microsite
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
      uri: `/assets/microsite/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Microsite
   * @param {microsite} microsite
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(microsite, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultLandingPageId',
        'depth',
        'description',
        'domains',
        'id',
        'isAllowedInFrame',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      microsite,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/microsite',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Microsite
   * @param {number} id ID of segment
   * @param {microsite} microsite
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, microsite, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultLandingPageId',
        'depth',
        'description',
        'domains',
        'id',
        'isAllowedInFrame',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      microsite,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/microsite/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Microsite
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/microsite/${id}`,
      method: 'delete',
    }, cb);
  }
}

