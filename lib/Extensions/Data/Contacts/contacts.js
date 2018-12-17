'use strict';

/**
 * @ignore
 * @type {ContactFields}
 */
let ContactFields = require('./contactFields');
/**
 * @ignore
 * @type {ContactLists}
 */
let ContactLists = require('./contactLists');
/**
 * @ignore
 * @type {ContactSegments}
 */
let ContactSegments = require('./contactSegments');

/**
 * Contacts Class
 * @class Contacts
 * @main EloquaApi
 * @exports Contacts
 */
class Contacts {
  constructor(options) {
    this._parent = options;
    this.fields = new ContactFields(this._parent);
    this.lists = new ContactLists(this._parent);
    this.segments = new ContactSegments(this._parent);
  }

  /**
   * Retrieve Contacts
   * @method get
   * @param {querystring} [querystring]
   * @param {number} [querystring.viewId]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search', 'viewId'],
        querystring
      );
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/data/contacts',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Contact
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {number} [querystring.viewId]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth', 'viewId'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/contact/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Contact
   * @method create
   * @param {contact} contact
   * @return {Object|String}
   */
  async create(contact) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'accountId',
        'accountname',
        'address1',
        'address2',
        'address3',
        'bouncebackDate',
        'businessPhone',
        'city',
        'country',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'emailAddress',
        'emailFormatPreference',
        'fax',
        'fieldValues',
        'firstName',
        'id',
        'isBounceback',
        'isSubscribed',
        'lastName',
        'mobilePhone',
        'name',
        'permissions',
        'postalCode',
        'province',
        'salesPerson',
        'subscriptionDate',
        'title',
        'type',
        'unsubscriptionDate',
        'updatedAt',
        'updatedBy'
      ],
      contact
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/data/contact',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Contact
   * @method update
   * @param {number} id
   * @param {contact} contact
   * @return {Object|String}
   */
  async update(id, contact) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'accountId',
        'accountname',
        'address1',
        'address2',
        'address3',
        'bouncebackDate',
        'businessPhone',
        'city',
        'country',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'emailAddress',
        'emailFormatPreference',
        'fax',
        'fieldValues',
        'firstName',
        'id',
        'isBounceback',
        'isSubscribed',
        'lastName',
        'mobilePhone',
        'name',
        'permissions',
        'postalCode',
        'province',
        'salesPerson',
        'subscriptionDate',
        'title',
        'type',
        'unsubscriptionDate',
        'updatedAt',
        'updatedBy'
      ],
      contact
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/contact/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Contact
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/data/contact/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Contacts;
