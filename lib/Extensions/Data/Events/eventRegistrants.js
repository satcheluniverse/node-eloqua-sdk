'use strict';

/**
 * EventRegistrants Class
 * @class EventRegistrants
 * @main EloquaApi
 * @exports EventRegistrants
 */
class EventRegistrants {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Events Registration Data
   * @method get
   * @param {number} parentId
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(parentId, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/eventRegistration/${parentId}/instances`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Event Registration Data
   * @method getOne
   * @param {number} parentId
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(parentId, id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['depth'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/eventRegistration/${parentId}/instance/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Event Registration Data
   * @method create
   * @param {number} parentId
   * @param {eventRegistrationData} eventRegistrationData
   * @return {Object|String}
   */
  async create(parentId, eventRegistrationData) {
    let data = this._parent._validate(
      [
        'accessedAt', 'accountId', 'contactId', 'createdAt', 'createdBy', 'currentStatus',
        'customObjectRecordStatus', 'depth', 'description', 'fieldValues', 'folderId', 'id', 'isMapped',
        'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type', 'uniqueCode', 'updatedAt',
        'updatedBy'
      ],
      eventRegistrationData);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/eventRegistration/${parentId}/instance`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Event Registration Data
   * @method update
   * @param {number} parentId
   * @param {number} id
   * @param {eventRegistrationData} eventRegistrationData
   * @return {Object|String}
   */
  async update(parentId, id, eventRegistrationData) {
    let data = this._parent._validate(
      [
        'accessedAt', 'accountId', 'contactId', 'createdAt', 'createdBy', 'currentStatus',
        'customObjectRecordStatus', 'depth', 'description', 'fieldValues', 'folderId', 'id', 'isMapped',
        'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type', 'uniqueCode', 'updatedAt',
        'updatedBy'
      ],
      eventRegistrationData);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/eventRegistration/${parentId}/instance/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Event Registration Data
   * @method delete
   * @param {number} parentId
   * @param {number} id
   * @return {Object|String}
   */
  async delete(parentId, id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/eventRegistration/${parentId}/instance/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = EventRegistrants;

