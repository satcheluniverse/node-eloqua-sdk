'use strict';

/**
 * Custom Object Sync Action Class
 * @class CustomObjectSyncAction
 * @main EloquaApi
 * @exports CustomObjectSyncAction
 * @constructor
 */
class CustomObjectSyncAction {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of sync action definitions for a custom object
   * @method get
   * @param {Number} parentId
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-get.html
   */
  async get(parentId, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a custom object sync action definition for a custom object
   * @method getOne
   * @param {Number} parentId
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-get.html
   */
  async getOne(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create a custom object sync action definition
   * @method create
   * @param {Number} parentId
   * @param {customObjectSyncAction} customObjectSyncAction
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-post.html
   */
  async create(parentId, customObjectSyncAction) {
    let data = this._parent._validate(
      [
        'createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed',
        'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'
      ],
      customObjectSyncAction);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update a custom object sync action definition
   * @method update
   * @param {Number} parentId
   * @param {number} id
   * @param {customObjectSyncAction} customObjectSyncAction
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-put.html
   */
  async update(parentId, id, customObjectSyncAction) {
    let data = this._parent._validate(
      [
        'createdAt', 'createdBy', 'fields', 'identifierFieldName', 'isSyncTriggeredOnImport', 'kbUsed',
        'name', 'syncActions', 'updatedAt', 'updatedBy', 'uri'
      ],
      customObjectSyncAction);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete a custom object sync action definition
   * @method delete
   * @param {Number} parentId
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-delete.html
   */
  async delete(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Upload custom object sync action data
   * @method uploadData
   * @param {Number} parentId
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-data-post.html
   */
  async uploadData(parentId, id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}/data`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete sync data for a custom object sync action definition
   * @method deleteData
   * @param {Number} parentId
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-data-delete.html
   */
  async deleteData(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = CustomObjectSyncAction;
