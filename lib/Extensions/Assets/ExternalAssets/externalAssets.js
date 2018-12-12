'use strict';

/**
 * @ignore
 * @type {ExternalAssetTypes}
 */
let ExternalAssetTypes = require('./externalAssetTypes');

/**
 * ExternalAssets Class
 * @class ExternalAssets
 * @main EloquaApi
 * @exports ExternalAssets
 */
class ExternalAssets {

  constructor(options) {
    this._parent = options;
    this.types = new ExternalAssetTypes(this._parent);
  }

  /**
   * Retrieve External Assets
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/externals',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single External Asset
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['depth'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/external/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create External Asset
   * @method create
   * @param {externalAsset} externalAsset
   * @return {Object|String}
   */
  async create(externalAsset) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'externalAssetTypeId', 'folderId', 'id', 'name', 'permissions', 'scheduledFor',
        'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'
      ],
      externalAsset);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/external',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update External Asset
   * @method update
   * @param {number} id
   * @param {externalAsset} externalAsset
   * @return {Object|String}
   */
  async update(id, externalAsset) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'externalAssetTypeId', 'folderId', 'id', 'name', 'permissions', 'scheduledFor',
        'sourceTemplateId', 'type', 'updatedAt', 'updatedBy'
      ],
      externalAsset);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/external/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete External Asset
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/external/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ExternalAssets;
