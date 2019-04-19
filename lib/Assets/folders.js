'use strict';
/**
 * @module
 */

import debug from 'debug';

const log = debug('eloqua:assets:folders');

/** Folders Class */
export default class Folders {
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
   * Retrieve Campaign Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  campaign(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/campaign/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Contact List Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  contactList(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/list/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Contact Filter Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  contactFilter(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/filter/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Contact Segment Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  contactSegment(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contact/segment/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Content Section Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  contentSection(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/contentSection/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }


  /**
   * Retrieve Dynamic Content Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  dynamicContent(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/dynamicContent/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Email Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  email(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Email Footers Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  emailFooter(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/footer/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Email Headers Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  emailHeaders(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/email/header/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Form Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  form(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/form/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Field Merge Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  fieldMerge(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/fieldMerge/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Hyperlink Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  hyperlink(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/hyperlink/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Image Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  image(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/image/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Imported Files Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  importedFile(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/importedFile/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Landing Page Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  landingPage(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/landingPage/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }

  /**
   * Retrieve Program Folders
   * @param {querystring} [querystring] querystring params to include in request
   * @param {number|string} [id=root] Folder Id or 'root' for top directory
   * @param {Eloqua.callback} cb Callback to be returned
   * @returns {Object|String} Eloqua response object or error string
   */
  program(querystring, id = 'root', cb) {
    let qs = {};
    if (querystring) {
      qs = this.#parent._validate(['count', 'depth', 'page'], querystring);
    }

    return this.#parent._request({
      api: 'REST',
      uri: `/assets/program/folder/${id}/contents`,
      qs: qs,
    }, cb);
  }
}
