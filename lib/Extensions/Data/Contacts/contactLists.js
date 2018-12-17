'use strict';

/**
 * ContactLists Class
 * @class ContactLists
 * @main EloquaApi
 * @exports ContactLists
 */
class ContactLists {
  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Contact Lists
   * @method get
   * @param {querystring} [querystring]
   * @return {Object|String}
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['count', 'depth', 'lastUpdatedAt', 'orderBy', 'page', 'search'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/contact/lists',
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Contact List
   * @method getOne
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @return {Object|String}
   */
  async getOne(id, querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(['depth'], querystring);
    }

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/list/${id}`,
        qs: qs
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Contact List
   * @method create
   * @param {contactList} contactList
   * @return {Object|String}
   */
  async create(contactList) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'dataLookupId',
        'depth',
        'description',
        'id',
        'membershipAdditions',
        'membershipDeletions',
        'name',
        'permissions',
        'scope',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      contactList
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/contact/list',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Contact List
   * @method update
   * @param {number} id
   * @param {contactList} contactList
   * @return {Object|String}
   */
  async update(id, contactList) {
    let data = this._parent._validate(
      [
        'accessedAt',
        'count',
        'createdAt',
        'createdBy',
        'currentStatus',
        'dataLookupId',
        'depth',
        'description',
        'id',
        'membershipAdditions',
        'membershipDeletions',
        'name',
        'permissions',
        'scope',
        'type',
        'updatedAt',
        'updatedBy'
      ],
      contactList
    );

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/list/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Contact List
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/contact/list/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = ContactLists;
