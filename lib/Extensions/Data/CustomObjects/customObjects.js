'use strict';

/**
 * @ignore
 * @type {CustomObjectData}
 */
let CustomObjectData = require('./customObjectData');

/**
 * CustomObjects Class
 * @class CustomObjects
 * @main EloquaApi
 * @exports CustomObjects
 */
class CustomObjects {

  constructor(options) {
    this._parent = options;
    this.data = new CustomObjectData(this._parent);
  }

  /**
   * Retrieve Custom Objects
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
        uri: '/assets/customObjects',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Custom Object
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
        uri: `/assets/customObject/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Custom Object
   * @method create
   * @param {customObject} customObject
   * @return {Object|String}
   */
  async create(customObject) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'displayNameFieldId', 'emailAddressFieldId', 'fields', 'folderId', 'id', 'name', 'permissions',
        'scheduledFor', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'
      ],
      customObject);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/customObject',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Custom Object
   * @method update
   * @param {number} id
   * @param {customObject} customObject
   * @return {Object|String}
   */
  async update(id, customObject) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'displayNameFieldId', 'emailAddressFieldId', 'fields', 'folderId', 'id', 'name', 'permissions',
        'scheduledFor', 'sourceTemplateId', 'type', 'uniqueCodeFieldId', 'updatedAt', 'updatedBy'
      ],
      customObject);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/customObject/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Custom Object
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/customObject/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = CustomObjects;

