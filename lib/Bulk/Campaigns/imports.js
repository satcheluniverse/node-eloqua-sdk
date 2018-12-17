'use strict';
/**
 * @module
 */

/** Campaign Responses Import Class */
export default class CampaignResponsesImports {
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
   * Retrieve a list of campaign response import definitions
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-get.html
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    return this.#parent._request({
      api: 'Bulk',
        uri: '/campaignResponses/imports',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve a campaign response import definition
   * @param {Number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-get.html
   */
  getOne(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
      uri: `/campaignResponses/imports/${id}`,
    }, cb);
  }

  /**
   * Create a campaign response import definition
   * @param {campaignResponseImport} campaignResponseImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-post.html
   */
  create(campaignResponseImport, cb) {
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
      campaignResponseImport
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: '/campaignResponses/imports',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update a campaign response import definition
   * @param {number} id
   * @param {campaignResponseImport} campaignResponseImport
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-put.html
   */
  update(id, campaignResponseImport, cb) {
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
      campaignResponseImport
    );

    return this.#parent._request({
      api: 'Bulk',
        uri: `/campaignResponses/imports/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete a campaign response import definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-delete.html
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/campaignResponses/imports/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Upload data for a campaign response import definition
   * @param {Number} id
   * @param {Array} data
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-data-post.html
   */
  uploadData(id, data, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/campaignResponses/imports/${id}/data`,
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete the synced data for a campaign response import definition
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-data-delete.html
   */
  deleteData(id, cb) {
    return this.#parent._request({
      api: 'Bulk',
        uri: `/campaignResponses/imports/${id}/data`,
      method: 'delete',
    }, cb);
  }
}

