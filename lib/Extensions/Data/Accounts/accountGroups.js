'use strict';

/**
 * Data Account Groups Class
 * @class AccountGroups
 * @main EloquaApi
 * @exports AccountGroups
 */
class AccountGroups {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Account Groups
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
        uri: '/assets/account/groups',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Account Group
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
        uri: `/assets/account/group/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Account Group
   * @method create
   * @param {accountGroup} accountGroup
   * @return {Object|String}
   */
  async create(accountGroup) {
    let data = this._parent._validate(
      [
        'accessedAt', 'count', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'folderId', 'id', 'isArchived', 'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type',
        'updatedAt', 'updatedBy'
      ],
      accountGroup);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/account/group',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Account Group
   * @method update
   * @param {number} id
   * @param {accountGroup} accountGroup
   * @return {Object|String}
   */
  async update(id, accountGroup) {
    let data = this._parent._validate(
      [
        'accessedAt', 'count', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'folderId', 'id', 'isArchived', 'name', 'permissions', 'scheduledFor', 'sourceTemplateId', 'type',
        'updatedAt', 'updatedBy'
      ],
      accountGroup);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/account/group/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Account Group
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/account/group/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = AccountGroups;

