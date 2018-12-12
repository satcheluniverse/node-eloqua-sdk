'use strict';

/**
 * @ignore
 * @type {EventExports}
 */
let EventExports = require('./exports');
/**
 * @ignore
 * @type {EventImports}
 */
let EventImports = require('./imports');
/**
 * @ignore
 * @type {EventFields}
 */
let EventFields = require('./fields');

/**
 * Events Class
 * @class Events
 * @main EloquaApi
 * @exports Events
 * @constructor
 */
class Events {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this._parent = options;
    this.export = new EventExports(options);
    this.import = new EventImports(options);
    this.fields = new EventFields(options);
  }

  /**
   * Retrieve a list of events
   * @method get
   * @param {Object} [querystring]
   * @param {Number} [querystring.limit]
   * @param {String} [querystring.links]
   * @param {Number} [querystring.offset]
   * @param {String} [querystring.orderBy]
   * @param {String} [querystring.q]
   * @param {Boolean} [querystring.totalResults]
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-get.html
   */
  async get(querystring) {
    let qs = {};
    if (querystring) {
      qs = this._parent._validate(
        ['limit', 'links', 'offset', 'orderBy', 'q', 'totalResults'],
        querystring);
    }

    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: '/events',
        qs: qs,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }

  /**
   * Retrieve an event
   * @method getOne
   * @param {Number} parentId
   * @return {Object|String}
   * @see https://docs.oracle.com/cloud/latest/marketingcs_gs/OMCAC/op-api-bulk-2.0-events-id-get.html
   */
  async getOne(parentId) {
    try {
      return await this._parent._request({
        api: 'Bulk',
        uri: `/events/${parentId}`,
      });
    } catch (error) {
      return await this._parent._throwError(error);
    }
  }
}

module.exports = Events;
