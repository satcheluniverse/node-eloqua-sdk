'use strict';
/**
 * @module
 */

/** Custom Object Exports Class */
export default class CustomObjectExports {
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
   * Retrieve a list of export definitions for a custom object
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
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-get.html
   */
  get(parentId, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/exports`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve the specified export definition for a custom object
   * @param {Number} parentId
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-id-get.html
   */
  getOne(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/customObjects/${parentId}/exports/${id}`,
    }, cb);
  }

  /**
   * Create an export definition for a custom object
   * @param {Number} parentId
   * @param {customObjectExport} customObjectExport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-post.html
   */
  create(parentId, customObjectExport, cb) {
    const data = this.#parent._validate(
      [
        'areSystemTimestampsInUTC',
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'filter',
        'kbUsed',
        'maxRecords',
        'name',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      customObjectExport,
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/exports`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an export definition for a custom object
   * @param {Number} parentId
   * @param {number} id
   * @param {customObjectExport} customObjectExport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-id-put.html
   */
  update(parentId, id, customObjectExport, cb) {
    const data = this.#parent._validate(
      [
        'areSystemTimestampsInUTC',
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'filter',
        'kbUsed',
        'maxRecords',
        'name',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      customObjectExport,
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/exports/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a custom object export definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-id-delete.html
   */
  delete(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/exports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Retrieve the synced data for a custom object export definition
   * @param {Number} parentId
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-id-data-get.html
   */
  getData(parentId, id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/exports/${id}/data`,
      qs: qs,
    }, cb);
  }

  /**
   * Delete the synced data for a custom object export definition
   * @param {Number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-customobjects-parentid-exports-id-data-delete.html
   */
  deleteData(parentId, id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/customObjects/${parentId}/exports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

