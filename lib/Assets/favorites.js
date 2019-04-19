'use strict';
/**
 * @module
 */

import debug from 'debug';

const log = debug('eloqua:assets:favorites');

/** Favorites Class */
export default class Favorites {
  /**
   * Parent Object
   * @member {Eloqua}
   */
  #parent;

  /**
   * Standard constructor
   * @param {Eloqua} options Parent object
   */
  constructor(options) {
    this.#parent = options;
  }

  /**
   * Retrieve Campaign Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  campaign(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/campaign',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Contact Segment Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  contactSegment(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/contact/segment',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Contact Scoring Model Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  contactScoringModel(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/contact/scoring/model',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Email Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  email(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/email',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Form Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  form(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/form',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Landing Page Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  landingPage(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/landingPage',
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Program Favorites
   * @param {querystring} [querystring] querystring params to include in request
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  program(querystring, cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: '/assets/favorite/program',
      qs: qs,
    }, cb);
  }
}
