'use strict';

/**
 * @ignore
 * @type {ContactExports}
 */
let ContactExports = require('./exports');
/**
 * @ignore
 * @type {ContactImports}
 */
let ContactImports = require('./imports');
/**
 * @ignore
 * @type {ContactFields}
 */
let ContactFields = require('./fields');
/**
 * @ignore
 * @type {ContactFilters}
 */
let ContactFilters = require('./filters');
/**
 * @ignore
 * @type {ContactLists}
 */
let ContactLists = require('./lists');
/**
 * @ignore
 * @type {ContactScoringModels}
 */
let ContactScoringModels = require('./scoringModels');
/**
 * @ignore
 * @type {ContactSegments}
 */
let ContactSegments = require('./segments');
/**
 * @ignore
 * @type {ContactSyncAction}
 */
let ContactSyncActions = require('./syncActions');

/**
 * Campaign Responses Class
 * @class Contacts
 * @main EloquaApi
 * @exports Contacts
 * @constructor
 */
class Contacts {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this.exports = new ContactExports(options);
    this.imports = new ContactImports(options);
    this.fields = new ContactFields(options);
    this.filters = new ContactFilters(options);
    this.lists = new ContactLists(options);
    this.scoringModels = new ContactScoringModels(options);
    this.segments = new ContactSegments(options);
    this.syncActions = new ContactSyncActions(options);
  }
}

module.exports = Contacts;
