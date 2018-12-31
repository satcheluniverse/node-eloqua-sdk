'use strict';
/**
 * @module
 */

/** Assets Programs Class */

export default class Programs {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Programs
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
      uri: '/assets/programs',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Program
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
      uri: `/assets/program/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Program
   * @param {program} program
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(program, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultEntityId',
        'defaultEntityType',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isMemberAllowedDuplicates',
        'isReadOnly',
        'name',
        'permissions',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      program,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/program',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Program
   * @param {number} id
   * @param {program} program
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, program, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultEntityId',
        'defaultEntityType',
        'depth',
        'description',
        'elements',
        'folderId',
        'id',
        'isMemberAllowedDuplicates',
        'isReadOnly',
        'name',
        'permissions',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      program,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Program
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Activate Program
   * @param {number} id
   * @param {Object} querystring
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  activate(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['runAsUserId', 'scheduledFor'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/active/${id}`,
      qs: qs,
      method: 'post',
    }, cb);
  }

  /**
   * Deactivate Program
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  deactivate(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/draft/${id}`,
      method: 'post',
    }, cb);
  }

  /**
   * Deactivate Program
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  pause(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/pause/${id}`,
      method: 'post',
    }, cb);
  }
}

