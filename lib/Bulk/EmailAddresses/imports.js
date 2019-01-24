'use strict';
/**
 * @module
 */

/** Email Addresses Imports Class */
export default class EmailAddressesImports {
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
   * Retrieve a list of email address import definitions
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/emailAddresses/imports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve an email address import definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/emailAddresses/imports/${id}`,
    }, cb);
  }

  /**
   * Create an email address import definition
   * @param {emailAddressesImport} emailAddressesImport
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-post.html
   */
  create(emailAddressesImport, cb) {
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
        'syncActions',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      emailAddressesImport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: '/emailAddresses/imports',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update an email address import definition
   * @param {number} id ID of segment
   * @param {emailAddressesImport} emailAddressesImport
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-put.html
   */
  update(id, emailAddressesImport, cb) {
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
        'syncActions',
        'updatedAt',
        'updatedBy',
        'updateRule',
        'uri',
      ],
      emailAddressesImport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/emailAddresses/imports/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete an email address import definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/emailAddresses/imports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Submit data for an email address import
   * @param {number} id ID of segment
   * @param {Array} data
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-data-post.html
   */
  uploadData(id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/emailAddresses/imports/${id}/data`,
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete an email address import definition's synced data
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-emailaddresses-imports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/emailAddresses/imports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

