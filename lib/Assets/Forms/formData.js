'use strict';
/**
 * @module
 */

/** FormData Class */
export default class FormData {
  #parent;

  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Form Data From Single Form
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.count]
   * @param {string} [querystring.endAt]
   * @param {string} [querystring.page]
   * @param {string} [querystring.startAt]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  get(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'endAt', 'page', 'startAt'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/data/form/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Form Data
   * @param {number} id
   * @param {form} form
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(id, form, cb) {
    const data = this.#parent._validate(
      ['currentStatus', 'fieldValues', 'id', 'processingStepErrors', 'submittedAt', 'submittedByContactId', 'type'],
      form,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/data/form/${id}`,
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Delete Form Data
   * @param {number} id
   * @param {number} rowId
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, rowId, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/data/form/${id}/datarow/${rowId}`,
      method: 'delete',
    }, cb);
  }
}

