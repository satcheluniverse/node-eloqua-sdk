'use strict';
/**
 * @module
 */

/** Custom Object Import Class */
export default class CustomObjectImports {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;
  /**
   * Constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve a list of import definitions for a custom object
   * @param {Number} parentId
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-get.html
   */
  get(parentId, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/imports`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an import definition for a custom object
   * @param {Number} parentId
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-get.html
   */
  getOne(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/imports/${id}`,
    }, cb);
  }

  /**
   * Create an import definition for a custom object
   * @param {Number} parentId
   * @param {customObjectImport} customObjectImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-post.html
   */
  create(parentId, customObjectImport, cb) {
    const data = this.#parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'id',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'mapDataCards',
        'mapDataCardsCaseSensitiveMatch',
        'mapDataCardsEntityField',
        'mapDataCardsEntityType',
        'mapDataCardsSourceField',
        'name',
        'nullIdentifierFieldName',
        'parentId',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      customObjectImport
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/imports`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an import definition for a custom object
   * @param {Number} parentId
   * @param {number} id
   * @param {customObjectImport} customObjectImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-put.html
   */
  update(parentId, id, customObjectImport, cb) {
    const data = this.#parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'id',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'mapDataCards',
        'mapDataCardsCaseSensitiveMatch',
        'mapDataCardsEntityField',
        'mapDataCardsEntityType',
        'mapDataCardsSourceField',
        'name',
        'nullIdentifierFieldName',
        'parentId',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      customObjectImport
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a custom object import definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-delete.html
   */
  delete(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload data for a custom object import definition
   * @param {Number} parentId
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-data-post.html
   */
  uploadData(parentId, id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}/data`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete synced data for a custom object import definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-imports-id-data-delete.html
   */
  deleteData(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/imports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

