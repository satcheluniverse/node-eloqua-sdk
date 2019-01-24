'use strict';
/**
 * @module
 */


import ContactFields from './contactFields';
import ContactLists from './contactLists';
import ContactSegments from './contactSegments';
import ContactFilters from './contactFilters';

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
    this.filters = new ContactFilters(this.#parent);
  }

  /**
   * Retrieve Contacts
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number} [querystring.viewId] View ID to be used for fields returned
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  get(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(
        ['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search', 'viewId'],
        querystring,
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
   * @param {number} id ID of segment
   * @param {Object} [querystring] querystring params to include in request
   * @param {string} [querystring.depth] Level of detail to return (minimal, partial, complete)
   * @param {number} [querystring.viewId] View ID to be used for fields returned
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
      contact,
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
   * @param {number} id ID of segment
   * @param {contact} contact
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
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
      contact,
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
   * @param {number} id ID of segment
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/data/contact/${id}`,
      method: 'delete',
    }, cb);
  }
}

