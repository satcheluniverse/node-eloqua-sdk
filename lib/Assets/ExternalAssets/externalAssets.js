'use strict';
/**
 * @module
 */

import ExternalAssetTypes from './externalAssetTypes';

/** ExternalAssets Class */
export default class ExternalAssets {
  #parent;
  constructor(options) {
    this.#parent = options;
    this.types = new ExternalAssetTypes(this.#parent);
  }

  /**
   * Retrieve External Assets
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
        uri: '/assets/externals',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single External Asset
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
        uri: `/assets/external/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create External Asset
   * @param {externalAsset} externalAsset
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(externalAsset, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'externalAssetTypeId',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      externalAsset
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/external',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update External Asset
   * @param {number} id
   * @param {externalAsset} externalAsset
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, externalAsset, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'externalAssetTypeId',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      externalAsset
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/external/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete External Asset
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/external/${id}`,
      method: 'delete',
    }, cb);
  }
}

