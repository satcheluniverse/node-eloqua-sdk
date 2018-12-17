'use strict';
/**
 * @module
 */

/** Custom Object Sync Action Class */
export default class CustomObjectSyncActions {
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
   * Retrieve a list of sync action definitions for a custom object
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
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-get.html
   */
  get(parentId, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a custom object sync action definition for a custom object
   * @param {Number} parentId
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-get.html
   */
  getOne(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/syncActions/${id}`,
    }, cb);
  }

  /**
   * Create a custom object sync action definition
   * @param {Number} parentId
   * @param {customObjectSyncAction} customObjectSyncAction
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-post.html
   */
  create(parentId, customObjectSyncAction, cb) {
    const data = this.#parent._validate(
      [
        'createdAt',
        'createdBy',
        'fields',
        'identifierFieldName',
        'isSyncTriggeredOnImport',
        'kbUsed',
        'name',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      customObjectSyncAction
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update a custom object sync action definition
   * @param {Number} parentId
   * @param {number} id
   * @param {customObjectSyncAction} customObjectSyncAction
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-put.html
   */
  update(parentId, id, customObjectSyncAction, cb) {
    const data = this.#parent._validate(
      [
        'createdAt',
        'createdBy',
        'fields',
        'identifierFieldName',
        'isSyncTriggeredOnImport',
        'kbUsed',
        'name',
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      customObjectSyncAction
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a custom object sync action definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-delete.html
   */
  delete(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload custom object sync action data
   * @param {Number} parentId
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-data-post.html
   */
  uploadData(parentId, id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}/data`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete sync data for a custom object sync action definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-syncactions-id-data-delete.html
   */
  deleteData(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/syncActions/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

