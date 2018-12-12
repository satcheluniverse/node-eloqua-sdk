'use strict';

/**
 * EmailGroups Class
 * @class EmailGroups
 * @main EloquaApi
 * @exports EmailGroups
 */
class EmailGroups {

  constructor(options) {
    this._parent = options;
  }

  /**
   * Retrieve Email Groups
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
        uri: '/assets/email/groups',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve Single Email Group
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
        uri: `/assets/email/group/${id}`,
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Create Email Group
   * @method create
   * @param {emailGroup} emailGroup
   * @return {Object|String}
   */
  async create(emailGroup) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'displayName', 'emailFooterId', 'emailHeaderId', 'emailIds', 'id', 'isVisibleInOutlookPlugin',
        'isVisibleInPublicSubscriptionList', 'name', 'permissions', 'subscriptionLandingPageId',
        'subscriptionListDataLookupId', 'subscriptionListId', 'type', 'unsubscriptionLandingPageId',
        'unSubscriptionListDataLookupId', 'unSubscriptionListId', 'updatedAt', 'updatedBy'
      ],
      emailGroup);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: '/assets/email/group',
        method: 'post',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Update Email Group
   * @method update
   * @param {number} id
   * @param {emailGroup} emailGroup
   * @return {Object|String}
   */
  async update(id, emailGroup) {
    let data = this._parent._validate(
      [
        'accessedAt', 'createdAt', 'createdBy', 'currentStatus', 'depth', 'description',
        'displayName', 'emailFooterId', 'emailHeaderId', 'emailIds', 'id', 'isVisibleInOutlookPlugin',
        'isVisibleInPublicSubscriptionList', 'name', 'permissions', 'subscriptionLandingPageId',
        'subscriptionListDataLookupId', 'subscriptionListId', 'type', 'unsubscriptionLandingPageId',
        'unSubscriptionListDataLookupId', 'unSubscriptionListId', 'updatedAt', 'updatedBy'
      ],
      emailGroup);

    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/group/${id}`,
        method: 'put',
        data: data
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Delete Email Group
   * @method delete
   * @param {number} id
   * @return {Object|String}
   */
  async delete(id) {
    try {
      return await this._parent._request({
        api: 'REST',
        uri: `/assets/email/group/${id}`,
        method: 'delete'
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = EmailGroups;
