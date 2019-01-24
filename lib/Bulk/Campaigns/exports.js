'use strict';
/**
 * @module
 */

/** Campaign Responses Exports Class */
export default class CampaignResponsesExports {
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
   * Retrieve a list of campaign response export definitions
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: '/campaignResponses/exports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a campaign response export definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/campaignResponses/exports/${id}`,
    }, cb);
  }

  /**
   * Create a campaign response export definition
   * @param {campaignResponseExport} campaignResponseExport
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-post.html
   */
  create(campaignResponseExport, cb) {
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
      campaignResponseExport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: '/campaignResponses/exports',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update a campaign response export definition
   * @param {number} id ID of segment
   * @param {campaignResponseExport} campaignResponseExport
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-put.html
   */
  update(id, campaignResponseExport, cb) {
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
      campaignResponseExport,
    );

    return this.#parent._request({
      api: 'Bulk',
      uri: `/campaignResponses/exports/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a campaign response export definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/campaignResponses/exports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Retrieve the synced data for a campaign response export definition
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-data-get.html
   */
  getData(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
      uri: `/campaignResponses/exports/${id}/data`,
      qs: qs,
    }, cb);
  }

  /**
   * Delete the synced data for a campaign response export definition
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/campaignResponses/exports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

