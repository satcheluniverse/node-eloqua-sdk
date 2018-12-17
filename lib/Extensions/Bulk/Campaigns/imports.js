'use strict';

/**
 * Campaign Responses Import Class
 * @class CampaignResponsesImports
 * @main EloquaApi
 * @exports CampaignResponsesImports
 * @constructor
 */
class CampaignResponsesImports {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of campaign response import definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/campaignResponses/imports',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a campaign response import definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/imports/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create a campaign response import definition
   * @method create
   * @param {campaignResponseImport} campaignResponseImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-post.html
   */
  async create(campaignResponseImport) {
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
      campaignResponseImport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/campaignResponses/imports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update a campaign response import definition
   * @method update
   * @param {number} id
   * @param {campaignResponseImport} campaignResponseImport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-put.html
   */
  async update(id, campaignResponseImport) {
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
      campaignResponseImport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/imports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete a campaign response import definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/imports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Upload data for a campaign response import definition
   * @method uploadData
   * @param {Number} id
   * @param {Array} data
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-data-post.html
   */
  async uploadData(id, data) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/imports/${id}/data`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete the synced data for a campaign response import definition
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-campaignresponses-imports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/campaignResponses/imports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = CampaignResponsesImports;
