'use strict';
/**
 * @module
 */

/** Opportunities Imports Class */
export default class OpportunitiesImports {
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
   * Retrieve a list of opportunity import definitions
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: '/opportunities/imports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an opportunity import definition
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/opportunities/imports/${id}`,
    }, cb);
  }

  /**
   * Create an opportunity import definition
   * @param {opportunitiesImport} opportunitiesImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-post.html
   */
  create(opportunitiesImport, cb) {
    const data = this.#parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'name',
        'nullIdentifierFieldName',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      opportunitiesImport
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: '/opportunities/imports',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an opportunity import definition
   * @param {number} id
   * @param {opportunitiesImport} opportunitiesImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-id-put.html
   */
  update(id, opportunitiesImport, cb) {
    const data = this.#parent._validate(
      [
        'autoDeleteDuration',
        'createdAt',
        'createdBy',
        'dataRetentionDuration',
        'fields',
        'identifierFieldName',
        'importPriorityUri',
        'isSyncTriggeredOnImport',
        'isUpdatingMultipleMatchedRecords',
        'kbUsed',
        'name',
        'nullIdentifierFieldName',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      opportunitiesImport
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/opportunities/imports/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete an opportunity import definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/opportunities/imports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload data for an opportunity import definition
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-id-data-post.html
   */
  uploadData(id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/opportunities/imports/${id}/data`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete the synced data for an opportunity import definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-opportunities-imports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/opportunities/imports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

