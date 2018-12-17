'use strict';
/**
 * @module
 */

/** EmailGroups Class */
export default class EmailGroups {
  #parent;
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Email Groups
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
        uri: '/assets/email/groups',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Email Group
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
        uri: `/assets/email/group/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Email Group
   * @param {emailGroup} emailGroup
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(emailGroup, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'displayName',
        'emailFooterId',
        'emailHeaderId',
        'emailIds',
        'id',
        'isVisibleInOutlookPlugin',
        'isVisibleInPublicSubscriptionList',
        'name',
        'permissions',
        'subscriptionLandingPageId',
        'subscriptionListDataLookupId',
        'subscriptionListId',
        'type',
        'unsubscriptionLandingPageId',
        'unSubscriptionListDataLookupId',
        'unSubscriptionListId',
        'updatedAt',
        'updatedBy',
      ],
      emailGroup
    );

    return this.#parent._request({
      api: 'REST',
        uri: '/assets/email/group',
        method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Email Group
   * @param {number} id
   * @param {emailGroup} emailGroup
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, emailGroup, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'displayName',
        'emailFooterId',
        'emailHeaderId',
        'emailIds',
        'id',
        'isVisibleInOutlookPlugin',
        'isVisibleInPublicSubscriptionList',
        'name',
        'permissions',
        'subscriptionLandingPageId',
        'subscriptionListDataLookupId',
        'subscriptionListId',
        'type',
        'unsubscriptionLandingPageId',
        'unSubscriptionListDataLookupId',
        'unSubscriptionListId',
        'updatedAt',
        'updatedBy',
      ],
      emailGroup
    );

    return this.#parent._request({
      api: 'REST',
        uri: `/assets/email/group/${id}`,
        method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Email Group
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
        uri: `/assets/email/group/${id}`,
      method: 'delete',
    }, cb);
  }
}

