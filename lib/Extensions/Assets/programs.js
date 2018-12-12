'use strict';

/**
 * Assets Programs Class
 * @class Programs
 * @main EloquaApi
 * @exports Programs
 */

class Programs {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Programs
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
        uri: '/assets/programs',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Program
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
        uri: `/assets/program/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Program
   * @method create
   * @param {program} program
   * @return {Object|String}
   */
  async create(program) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'defaultEntityId', 'defaultEntityType',
        'depth', 'description', 'elements', 'folderId', 'id', 'isMemberAllowedDuplicates', 'isReadOnly',
        'name', 'permissions', 'runAsUserId', 'scheduledFor', 'sourceTemplateId', 'type', 'updatedAt',
        'updatedBy'
      ],
      program);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/program',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Program
   * @method update
   * @param {number} id
   * @param {program} program
   * @return {Object|String}
   */
  async update(id, program) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'defaultEntityId', 'defaultEntityType',
        'depth', 'description', 'elements', 'folderId', 'id', 'isMemberAllowedDuplicates', 'isReadOnly',
        'name', 'permissions', 'runAsUserId', 'scheduledFor', 'sourceTemplateId', 'type', 'updatedAt',
        'updatedBy'
      ],
      program);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/program/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Program
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/program/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Activate Program
   * @method activate
   * @param {number} id
   * @param {Object} querystring
   * @return {Object|String}
   */
  async activate(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['runAsUserId', 'scheduledFor'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/program/active/${id}`,
        qs: qs,
        method: 'post'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Deactivate Program
   * @method deactivate
   * @param {number} id
   * @return {Object|String}
   */
  async deactivate(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/program/draft/${id}`,
        method: 'post'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Deactivate Program
   * @method pause
   * @param {number} id
   * @return {Object|String}
   */
  async pause(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/program/pause/${id}`,
        method: 'post'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = Programs;
