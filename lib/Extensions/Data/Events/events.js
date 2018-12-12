'use strict';

/**
 * @ignore
 * @type {EventRegistrants}
 */
let EventRegistrants = require('./eventRegistrants');

/**
 * Events Class
 * @class Events
 * @main EloquaApi
 * @exports Events
 */
class Events {
  constructor(options) {
    this._parent = options;
    this.registrants = new EventRegistrants(this._parent);
  }

  /**
   * Retrieve Events
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/eventRegistrations',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Event
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['depth'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/eventRegistration/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Event
   * @method create
   * @param {event} event
   * @return {Object|String}
   */
  async create(event) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions',
        'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type',
        'uniqueCodeFieldId', 'updatedAt', 'updatedBy'
      ],
      event);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/eventRegistration',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Event
   * @method update
   * @param {number} id
   * @param {event} event
   * @return {Object|String}
   */
  async update(id, event) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'emailAddressFieldId', 'eventGroupByFieldId', 'fields', 'folderId', 'id', 'name', 'permissions',
        'scheduledFor', 'sessionFields', 'sessionFieldValues', 'sessions', 'sourceTemplateId', 'type',
        'uniqueCodeFieldId', 'updatedAt', 'updatedBy'
      ],
      event);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/eventRegistration/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Event
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/eventRegistration/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = Events;

