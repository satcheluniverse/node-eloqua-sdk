'use strict';
/**
 * @module
 */

/** Contact Exports Class */
export default class ContactExports {
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
   * Retrieve a list of contact export definitions
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/contacts/exports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a contact export definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/contacts/exports/${id}`,
    }, cb);
  }

  /**
   * Create a contact export definition
   * @param {contactExport} contactExport
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-post.html
   */
  create(contactExport, cb) {
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
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      contactExport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: '/contacts/exports',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update a contact export definition
   * @param {number} id ID of segment
   * @param {contactExport} contactExport
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-id-put.html
   */
  update(id, contactExport, cb) {
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
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri',
      ],
      contactExport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/contacts/exports/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a contact export definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/contacts/exports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Retrieve a contact export definition's synced data
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-id-data-get.html
   */
  getData(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: `/contacts/exports/${id}/data`,
      qs: qs,
    }, cb);
  }

  /**
   * Delete a contact export definition's data
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-contacts-exports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/contacts/exports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

