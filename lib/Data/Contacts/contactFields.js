'use strict';
/**
 * @module
 */

/** ContactFields Class */
export default class ContactFields {
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
   * Retrieve Contact Fields
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
      uri: '/assets/contact/fields',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Contact Field
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
      uri: `/assets/contact/field/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Contact Field
   * @param {contactField} contactField
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(contactField, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'checkedValue',
        'createdAt',
        'createdBy',
        'currentStatus',
        'dataType',
        'defaultValue',
        'depth',
        'description',
        'displayType',
        'id',
        'internalName',
        'isPopulatedInOutlookPlugin',
        'isReadOnly',
        'isRequired',
        'isStandard',
        'name',
        'optionListId',
        'outputFormatId',
        'permissions',
        'showTrustedVisitorsOnly',
        'type',
        'uncheckedValue',
        'updatedAt',
        'updatedBy',
        'updateType',
      ],
      contactField,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/contact/field',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Contact Field
   * @param {number} id
   * @param {contactField} contactField
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, contactField, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'checkedValue',
        'createdAt',
        'createdBy',
        'currentStatus',
        'dataType',
        'defaultValue',
        'depth',
        'description',
        'displayType',
        'id',
        'internalName',
        'isPopulatedInOutlookPlugin',
        'isReadOnly',
        'isRequired',
        'isStandard',
        'name',
        'optionListId',
        'outputFormatId',
        'permissions',
        'showTrustedVisitorsOnly',
        'type',
        'uncheckedValue',
        'updatedAt',
        'updatedBy',
        'updateType',
      ],
      contactField,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/field/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Contact Field
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/field/${id}`,
      method: 'delete',
    }, cb);
  }
}

