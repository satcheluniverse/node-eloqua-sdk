'use strict';

/**
 * @ignore
 * @type {OpportunitiesImports}
 */
let OpportunitiesImports = require('./imports');
/**
 * @ignore
 * @type {OpportunitiesFields}
 */
let OpportunitiesFields = require('./fields');
/**
 * @ignore
 * @type {OpportunitiesContacts}
 */
let OpportunitiesContacts = require('./contacts');

/**
 * Campaign Responses Class
 * @class Opportunities
 * @main EloquaApi
 * @exports Opportunities
 * @constructor
 */
class Opportunities {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {

    this.imports = new OpportunitiesImports(options);
    this.fields = new OpportunitiesFields(options);
    this.contacts = new OpportunitiesContacts(options);
  }
}

module.exports = Opportunities;
