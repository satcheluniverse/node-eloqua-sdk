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
        uri: '/assets/external/types',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single External Asset Type
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
        uri: `/assets/external/type/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create External Asset Type
   * @param {externalAssets} externalAssets
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
      externalAssets
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
   * @param {number} id
   * @param {externalAssets} externalAssets
   * @param {Eloqua.callback} cb
   * @return {Object|String}
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
      externalAssets
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
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/external/type/${id}`,
      method: 'delete',
    }, cb);
  }
}

