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
      uri: '/assets/microsites',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Microsite
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
      uri: `/assets/microsite/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Microsite
   * @param {microsite} microsite
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {microsite} microsite
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/microsite/${id}`,
      method: 'delete',
    }, cb);
  }
}

