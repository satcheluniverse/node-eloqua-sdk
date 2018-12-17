'use strict';
/**
 * @module
 */

import debug from 'debug';

const log = debug('eloqua:assets:campaigns');

/** Campaigns Class */
export default class Campaigns {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;

  /**
   * Campaign object
   * @typedef {Object} campaign
   * @property [accessedAt]
   * @property [actualCost]
   * @property [badgeId]
   * @property [budgetedCost]
   * @property [campaignCategory]
   * @property [campaignType]
   * @property [clrEndDate]
   * @property [createdAt]
   * @property [createdBy]
   * @property [crmId]
   * @property [currentStatus]
   * @property [depth]
   * @property [description]
   * @property [elements]
   * @property [endAt]
   * @property [fieldValues]
   * @property [firstActivation]
   * @property [folderId]
   * @property [id]
   * @property [isEmailMarketingCampaign]
   * @property [isIncludedInROI]
   * @property [isMemberAllowedReEntry]
   * @property [isReadOnly]
   * @property [isSyncedWithCRM]
   * @property [memberCount]
   * @property [name]
   * @property [permissions]
   * @property [product]
   * @property [region]
   * @property [runAsUserId]
   * @property [scheduledFor]
   * @property [sourceTemplateId]
   * @property [startAt]
   * @property [type]
   * @property [updatedAt]
   * @property [updatedBy]
   */

  /**
   * Standard constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Campaigns
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
      uri: '/assets/campaigns',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Single Campaign
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
      uri: `/assets/campaign/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create Campaign
   * @param {campaign} campaign
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  create(campaign, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'actualCost',
        'badgeId',
        'budgetedCost',
        'campaignCategory',
        'campaignType',
        'clrEndDate',
        'createdAt',
        'createdBy',
        'crmId',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'endAt',
        'fieldValues',
        'firstActivation',
        'folderId',
        'id',
        'isEmailMarketingCampaign',
        'isIncludedInROI',
        'isMemberAllowedReEntry',
        'isReadOnly',
        'isSyncedWithCRM',
        'memberCount',
        'name',
        'permissions',
        'product',
        'region',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'startAt',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      campaign,
    );


    return this.#parent._request({
      api: 'REST',
      uri: '/assets/campaign',
      method: 'post',
      data: data,
    }, cb);
  }

  /**
   * Update Campaign
   * @param {number} id
   * @param {campaign} campaign
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  update(id, campaign, cb) {
    const data = this.#parent._validate(
      [
        'accessedAt',
        'actualCost',
        'badgeId',
        'budgetedCost',
        'campaignCategory',
        'campaignType',
        'clrEndDate',
        'createdAt',
        'createdBy',
        'crmId',
        'currentStatus',
        'depth',
        'description',
        'elements',
        'endAt',
        'fieldValues',
        'firstActivation',
        'folderId',
        'id',
        'isEmailMarketingCampaign',
        'isIncludedInROI',
        'isMemberAllowedReEntry',
        'isReadOnly',
        'isSyncedWithCRM',
        'memberCount',
        'name',
        'permissions',
        'product',
        'region',
        'runAsUserId',
        'scheduledFor',
        'sourceTemplateId',
        'startAt',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      campaign,
    );

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/campaign/${id}`,
      method: 'put',
      data: data,
    }, cb);
  }

  /**
   * Delete Campaign
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  delete(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/campaign/${id}`,
      method: 'delete',
    }, cb);
  }

  /**
   * Activate Campaign
   * @param {number} id
   * @param {Object} querystring
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  activate(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['activateNow', 'runAsUserId', 'scheduledFor'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/campaign/active/${id}`,
      qs: qs,
      method: 'post',
    }, cb);
  }

  /**
   * Deactivate Campaign
   * @param {number} id
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   */
  deactivate(id, cb) {
    return this.#parent._request({
      api: 'REST',
      uri: `/assets/campaign/draft/${id}`,
      method: 'post',
    }, cb);
  }
}

