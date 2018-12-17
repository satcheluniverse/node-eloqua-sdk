'use strict';
/**
 * @module
 */

import EventRegistrants from './eventRegistrants';

/** Events Class */
export default class Events {
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
    this.registrants = new EventRegistrants(this.#parent);
  }

  /**
   * Retrieve Events
   * @param {querystring} [querystring]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/eventRegistrations',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Event
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/eventRegistration/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Event
   * @param {event} event
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(event, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'emailAddressFieldId',
        'eventGroupByFieldId',
        'fields',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sessionFields',
        'sessionFieldValues',
        'sessions',
        'sourceTemplateId',
        'type',
        'uniqueCodeFieldId',
        'updatedAt',
        'updatedBy',
      ],
      event
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/eventRegistration',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Event
   * @param {number} id
   * @param {event} event
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, event, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'emailAddressFieldId',
        'eventGroupByFieldId',
        'fields',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sessionFields',
        'sessionFieldValues',
        'sessions',
        'sourceTemplateId',
        'type',
        'uniqueCodeFieldId',
        'updatedAt',
        'updatedBy',
      ],
      event
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/eventRegistration/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Event
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/eventRegistration/${id}`,
      method: 'delete',
    }, cb);
  }
}

