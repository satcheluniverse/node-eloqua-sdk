'use strict';

/**
 * Event Exports Class
 * @class EventExports
 * @main EloquaApi
 * @exports EventExports
 * @constructor
 */
class EventExports {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve a list of export definitions for an event
   * @method get
   * @param {Number} parentId
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-id-exports-get.html
   */
  async get(parentId, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an export definition for an event
   * @method getOne
   * @param {Number} parentId
   * @param {Number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-exports-id-get.html
   */
  async getOne(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports/${id}`
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create an export definition for an event
   * @method create
   * @param {Number} parentId
   * @param {eventExport} eventExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-exports-post.html
   */
  async create(parentId, eventExport) {
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
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri'
      ],
      eventExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update an export definition for an event
   * @method update
   * @param {Number} parentId
   * @param {number} id
   * @param {eventExport} eventExport
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-exports-id-put.html
   */
  async update(parentId, id, eventExport) {
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
        'syncActions',
        'updatedAt',
        'updatedBy',
        'uri'
      ],
      eventExport
    );

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete an export definition for an event
   * @method delete
   * @param {Number} parentId
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-exports-id-delete.html
   */
  async delete(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve the synced data for an event export definition
   * @method getData
   * @param {Number} parentId
   * @param {Number} id
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-exports-id-data-get.html
   */
  async getData(parentId, id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['limit', 'links', 'offset', 'totalResults'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports/${id}/data`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete the synced data for an event export definition
   * @method deleteData
   * @param {Number} parentId
   * @param {number} id
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-parentid-exports-id-data-delete.html
   */
  async deleteData(parentId, id) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}/exports/${id}/data`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = EventExports;
