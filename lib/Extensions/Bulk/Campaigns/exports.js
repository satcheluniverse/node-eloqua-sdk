'use strict';

/**
 * Campaign Responses Exports Class
 * @class CampaignResponsesExports
 * @main EloquaApi
 * @exports CampaignResponsesExports
 * @constructor
 */
class CampaignResponsesExports {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of campaign response export definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/campaignResponses/exports',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a campaign response export definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/exports/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create a campaign response export definition
   * @method create
   * @param {campaignResponseExport} campaignResponseExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-post.html
   */
  async create(campaignResponseExport) {
    let data = this._parent._validate(
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
        'uri'
      ],
      campaignResponseExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/campaignResponses/exports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update a campaign response export definition
   * @method update
   * @param {number} id
   * @param {campaignResponseExport} campaignResponseExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-put.html
   */
  async update(id, campaignResponseExport) {
    let data = this._parent._validate(
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
        'uri'
      ],
      campaignResponseExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/exports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete a campaign response export definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/exports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve the synced data for a campaign response export definition
   * @method getData
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-data-get.html
   */
  async getData(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/exports/${id}/data`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete the synced data for a campaign response export definition
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-exports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/exports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = CampaignResponsesExports;
