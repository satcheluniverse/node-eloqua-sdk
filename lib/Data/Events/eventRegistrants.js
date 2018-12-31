'use strict';
/**
 * @module
 */

/** EventRegistrants Class */
export default class EventRegistrants {
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
   * Retrieve Events Registration Data
   * @param {number} parentId
   * @param {querystring} [querystring]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  get(parentId, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/data/eventRegistration/${parentId}/instances`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Event Registration Data
   * @param {number} parentId
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  getOne(parentId, id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/data/eventRegistration/${parentId}/instance/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Event Registration Data
   * @param {number} parentId
   * @param {eventRegistrationData} eventRegistrationData
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(parentId, eventRegistrationData, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'accountId',
        'contactId',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customObjectRecordStatus',
        'depth',
        'description',
        'fieldValues',
        'folderId',
        'id',
        'isMapped',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'uniqueCode',
        'updatedAt',
        'updatedBy',
      ],
      eventRegistrationData,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/data/eventRegistration/${parentId}/instance`,
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Event Registration Data
   * @param {number} parentId
   * @param {number} id
   * @param {eventRegistrationData} eventRegistrationData
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(parentId, id, eventRegistrationData, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'accountId',
        'contactId',
        'createdAt',
        'createdBy',
        'currentStatus',
        'customObjectRecordStatus',
        'depth',
        'description',
        'fieldValues',
        'folderId',
        'id',
        'isMapped',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'uniqueCode',
        'updatedAt',
        'updatedBy',
      ],
      eventRegistrationData,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/data/eventRegistration/${parentId}/instance/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Event Registration Data
   * @param {number} parentId
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(parentId, id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/data/eventRegistration/${parentId}/instance/${id}`,
      method: 'delete',
    }, cb);
  }
}

