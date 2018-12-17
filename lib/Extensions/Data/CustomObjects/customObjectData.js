'use strict';

/**
 * CustomObjectData Class
 * @class CustomObjectData
 * @main EloquaApi
 * @exports CustomObjectData
 */
class CustomObjectData {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Custom Object Data
   * @method get
   * @param {number} parentId
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(parentId, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/customObject/${parentId}/instances`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Custom Object Data Record
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
      qs = this._parent._validate(['depth'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/customObject/${parentId}/instance/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Custom Object Data Record
   * @method create
   * @param {number} parentId
   * @param {customObjectData} customObjectData
   * @return {Object|String}
   */
  async create(parentId, customObjectData) {
    let data = this._parent._validate(
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
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'uniqueCode',
        'updatedAt',
        'updatedBy'
      ],
      customObjectData
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/customObject/${parentId}/instance`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Custom Object Data Record
   * @method update
   * @param {number} parentId
   * @param {number} id
   * @param {customObjectData} customObjectData
   * @return {Object|String}
   */
  async update(parentId, id, customObjectData) {
    let data = this._parent._validate(
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
        'name',
        'permissions',
        'scheduledFor',
        'sourceTemplateId',
        'type',
        'uniqueCode',
        'updatedAt',
        'updatedBy'
      ],
      customObjectData
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/customObject/${parentId}/instance/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Custom Object Data Record
   * @method delete
   * @param {number} parentId
   * @param {number} id
   * @return {Object|String}
   */
  async delete(parentId, id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/customObject/${parentId}/instance/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = CustomObjectData;
