'use strict';
/**
 * @module
 */

/** ExternalAssetTypes Class */
export default class ExternalAssetTypes {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve External Asset Types
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
      uri: '/assets/external/types',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single External Asset Type
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
      uri: `/assets/external/type/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create External Asset Type
   * @param {externalAssets} externalAssets
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  create(externalAssets, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'activityTypes',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'id',
        'image',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      externalAssets,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/external/type',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update External Asset Type
   * @param {number} id ID of segment
   * @param {externalAssets} externalAssets
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  update(id, externalAssets, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'activityTypes',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'id',
        'image',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      externalAssets,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/external/type/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete External Asset Type
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/external/type/${id}`,
      method: 'delete',
    }, cb);
  }
}

