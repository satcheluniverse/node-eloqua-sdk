'use strict';

/**
 * Activities Exports Class
 * @class ActivitiesExports
 * @main EloquaApi
 * @exports ActivitiesExports
 * @constructor
 */
class ActivitiesExports {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of activity export definitions
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/activities/exports',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an activity export definition
   * @method getOne
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-id-get.html
   */
  async getOne(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/activities/exports/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an activity export definition
   * @method create
   * @param {activityExport} activityExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-post.html
   */
  async create(activityExport) {
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
      activityExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/activities/exports',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an activity export definition
   * @method update
   * @param {number} id
   * @param {activityExport} activityExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-id-put.html
   */
  async update(id, activityExport) {
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
      activityExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/activities/exports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an activity export definition
   * @method delete
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-id-delete.html
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/activities/exports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve a list of activity export definitions
   * @method getData
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-id-data-get.html
   */
  async getData(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/activities/exports/${id}/data`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an activity export definition's data
   * @method deleteData
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-activities-exports-id-data-delete.html
   */
  async deleteData(id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/activities/exports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ActivitiesExports;
