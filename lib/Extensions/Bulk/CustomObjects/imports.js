'use strict';

/**
 * Custom Object Import Class
 * @class CustomObjectImports
 * @main EloquaApi
 * @exports CustomObjectImports
 * @constructor
 */
class CustomObjectImports {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of import definitions for a custom object
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
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-get.html
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
        uri: `/customObjects/${parentId}/imports`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an import definition for a custom object
   * @method getOne
   * @param {Number} parentId
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-get.html
   */
  async getOne(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an import definition for a custom object
   * @method create
   * @param {Number} parentId
   * @param {customObjectImport} customObjectImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-post.html
   */
  async create(parentId, customObjectImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'id',
        'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords', 'kbUsed', 'mapDataCards', 'mapDataCardsCaseSensitiveMatch',
        'mapDataCardsEntityField', 'mapDataCardsEntityType', 'mapDataCardsSourceField', 'name',
        'nullIdentifierFieldName', 'parentId', 'syncActions', 'updatedAt', 'updatedBy', 'updateRule',
        'uri'
      ],
      customObjectImport);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/imports`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an import definition for a custom object
   * @method update
   * @param {Number} parentId
   * @param {number} id
   * @param {customObjectImport} customObjectImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-put.html
   */
  async update(parentId, id, customObjectImport) {
    let data = this._parent._validate(
      [
        'autoDeleteDuration', 'createdAt', 'createdBy', 'dataRetentionDuration', 'fields', 'id',
        'identifierFieldName', 'importPriorityUri', 'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords', 'kbUsed', 'mapDataCards', 'mapDataCardsCaseSensitiveMatch',
        'mapDataCardsEntityField', 'mapDataCardsEntityType', 'mapDataCardsSourceField', 'name',
        'nullIdentifierFieldName', 'parentId', 'syncActions', 'updatedAt', 'updatedBy', 'updateRule',
        'uri'
      ],
      customObjectImport);

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete a custom object import definition
   * @method delete
   * @param {Number} parentId
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-delete.html
   */
  async delete(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Upload data for a custom object import definition
   * @method uploadData
   * @param {Number} parentId
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-data-post.html
   */
  async uploadData(parentId, id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}/data`,
        method: 'post',
        data: data,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete synced data for a custom object import definition
   * @method deleteData
   * @param {Number} parentId
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-data-delete.html
   */
  async deleteData(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = CustomObjectImports;
