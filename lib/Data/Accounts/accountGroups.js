'use strict';
/**
 * @module
 */

/** Data Account Groups Class */
export default class AccountGroups {
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
   * Retrieve Account Groups
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
      uri: '/assets/account/groups',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Account Group
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
      uri: `/assets/account/group/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Account Group
   * @param {accountGroup} accountGroup
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(accountGroup, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'id',
        'isArchived',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      accountGroup,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/account/group',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Account Group
   * @param {number} id
   * @param {accountGroup} accountGroup
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, accountGroup, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'folderId',
        'id',
        'isArchived',
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      accountGroup,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/account/group/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Account Group
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/account/group/${id}`,
      method: 'delete',
    }, cb);
  }
}

