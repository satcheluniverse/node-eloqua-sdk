'use strict';
/**
 * @module
 */


import ContactFields from './contactFields';
import ContactLists from './contactLists';
import ContactSegments from './contactSegments';

/** Contacts Class */
export default class Contacts {
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
    this.fields = new ContactFields(this.#parent);
    this.lists = new ContactLists(this.#parent);
    this.segments = new ContactSegments(this.#parent);
  }

  /**
   * Retrieve Contacts
   * @param {querystring} [querystring]
   * @param {number} [querystring.viewId]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search', 'viewId'],
        querystring
      );
    }

    return this.#parent._request({
      api: 'REST',
        uri: '/data/contacts',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Contact
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {number} [querystring.viewId]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth', 'viewId'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
        uri: `/data/contact/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Contact
   * @param {contact} contact
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(contact, cb) {
    const data = this.#parent._validate(
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
        'updatedBy',
      ],
      contact
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/data/contact',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Contact
   * @param {number} id
   * @param {contact} contact
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, contact, cb) {
    const data = this.#parent._validate(
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
        'updatedBy',
      ],
      contact
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/data/contact/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Contact
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/data/contact/${id}`,
      method: 'delete',
    }, cb);
  }
}

