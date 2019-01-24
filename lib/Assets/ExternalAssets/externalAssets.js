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
      uri: '/assets/externals',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single External Asset
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
      uri: `/assets/external/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create External Asset
   * @param {externalAsset} externalAsset
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
      externalAsset,
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
   * @param {number} id ID of segment
   * @param {externalAsset} externalAsset
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
      externalAsset,
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
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/external/${id}`,
      method: 'delete',
    }, cb);
  }
}

