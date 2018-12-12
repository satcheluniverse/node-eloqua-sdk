'use strict';

/**
 * ContactFields Class
 * @class ContactFields
 * @main EloquaApi
 * @exports ContactFields
 */
class ContactFields {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Contact Fields
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
        uri: '/assets/contact/fields',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Contact Field
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
        uri: `/assets/contact/field/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Contact Field
   * @method create
   * @param {contactField} contactField
   * @return {Object|String}
   */
  async create(contactField) {
    let data = this._parent._validate(
      [
        'accessedAt', 'checkedValue', 'createdAt', 'createdBy', 'currentStatus', 'dataType',
        'defaultValue', 'depth', 'description', 'displayType', 'id', 'internalName',
        'isPopulatedInOutlookPlugin', 'isReadOnly', 'isRequired', 'isStandard', 'name', 'optionListId',
        'outputFormatId', 'permissions', 'showTrustedVisitorsOnly', 'type', 'uncheckedValue',
        'updatedAt', 'updatedBy', 'updateType'
      ],
      contactField);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/contact/field',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Contact Field
   * @method update
   * @param {number} id
   * @param {contactField} contactField
   * @return {Object|String}
   */
  async update(id, contactField) {
    let data = this._parent._validate(
      [
        'accessedAt', 'checkedValue', 'createdAt', 'createdBy', 'currentStatus', 'dataType',
        'defaultValue', 'depth', 'description', 'displayType', 'id', 'internalName',
        'isPopulatedInOutlookPlugin', 'isReadOnly', 'isRequired', 'isStandard', 'name', 'optionListId',
        'outputFormatId', 'permissions', 'showTrustedVisitorsOnly', 'type', 'uncheckedValue',
        'updatedAt', 'updatedBy', 'updateType'
      ],
      contactField);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/field/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Contact Field
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/field/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

}

module.exports = ContactFields;

