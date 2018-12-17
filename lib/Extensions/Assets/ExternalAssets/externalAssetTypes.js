'use strict';

/**
 * ExternalAssetTypes Class
 * @class ExternalAssetTypes
 * @main EloquaApi
 * @exports ExternalAssetTypes
 */
class ExternalAssetTypes {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve External Asset Types
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/external/types',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single External Asset Type
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/external/type/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create External Asset Type
   * @method create
   * @param {externalAssets} externalAssets
   * @return {Object|String}
   */
  async create(externalAssets) {
    let data = this._parent._validate(
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
        'updatedBy'
      ],
      externalAssets
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/external/type',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update External Asset Type
   * @method update
   * @param {number} id
   * @param {externalAssets} externalAssets
   * @return {Object|String}
   */
  async update(id, externalAssets) {
    let data = this._parent._validate(
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
        'updatedBy'
      ],
      externalAssets
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/external/type/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete External Asset Type
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/external/type/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ExternalAssetTypes;
