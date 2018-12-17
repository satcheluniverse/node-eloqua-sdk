'use strict';

/**
 * FormData Class
 * @class FormData
 * @main EloquaApi
 * @exports FormData
 */
class FormData {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Form Data From Single Form
   * @method get
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.count]
   * @param {string} [querystring.endAt]
   * @param {string} [querystring.page]
   * @param {string} [querystring.startAt]
   * @return {Object|String}
   */
  async get(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'endAt', 'page', 'startAt'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/form/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Form Data
   * @method create
   * @param {number} id
   * @param {form} form
   * @return {Object|String}
   */
  async create(id, form) {
    let data = this._parent._validate(
      ['currentStatus', 'fieldValues', 'id', 'processingStepErrors', 'submittedAt', 'submittedByContactId', 'type'],
      form
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/form/${id}`,
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Form Data
   * @method delete
   * @param {number} id
   * @param {number} rowId
   * @return {Object|String}
   */
  async delete(id, rowId) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/form/${id}/datarow/${rowId}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = FormData;
