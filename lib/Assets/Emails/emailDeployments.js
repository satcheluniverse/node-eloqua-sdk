'use strict';
/**
 * @module
 */

/** EmailDeployments Class */
export default class EmailDeployments {
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
   * Retrieve an email deployment
   * @param {number} id
   * @param {Object} [querystring]
   * @param {string} [querystring.depth]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-2.0-assets-email-deployment-id-get.html
   */
  getOne(id, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['depth'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/deployment/${id}`,
      qs: qs,
    }, cb);
  }

  /**
   * Create and send an email deployment
   * @param {Object} emailDeployment
   * @param {Object} [querystring]
   * @param {string} [querystring.preMerge]
   * @param {Eloqua.callback} cb
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-rest-2.0-assets-email-deployment-post.html
   */
  create(emailDeployment, querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['preMerge'], querystring);
    }

    const data = this.#parent._validate(
      [
        'accessedAt',
        'createdAt',
        'createdBy',
        'currentStatus',
        'depth',
        'description',
        'email',
        'endAt',
        'failedSendCount',
        'folderId',
        'id',
        'name',
        'permissions',
        'scheduledFor',
        'sentContent',
        'sentSubject',
        'sourceTemplatedId',
        'successfulSendCount',
        'type',
        'updatedAt',
        'updatedBy',
      ],
      emailDeployment,
    );

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/email/deployment',
      qs: qs,
      method: 'post',
      data: data,
    }, cb);
  }
}

