'use strict';

/**
 * System Users Class
 * @class Users
 * @main EloquaApi
 * @exports Users
 */
class Users {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Users
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/system/users',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single User
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/system/user/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create User
   * @method create
   * @param {user} user
   * @return {Object|String}
   */
  async create(user) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'company',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultAccountViewId',
        'defaultContactViewId',
        'depth',
        'description',
        'emailAddress',
        'id',
        'loginName',
        'name',
        'permissions',
        'preferences',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      user
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/system/user',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update User
   * @method update
   * @param {number} id
   * @param {user} user
   * @return {Object|String}
   */
  async update(id, user) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'company',
        'createdAt',
        'createdBy',
        'currentStatus',
        'defaultAccountViewId',
        'defaultContactViewId',
        'depth',
        'description',
        'emailAddress',
        'id',
        'loginName',
        'name',
        'permissions',
        'preferences',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      user
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/system/user/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete User
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/system/user/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Users;
