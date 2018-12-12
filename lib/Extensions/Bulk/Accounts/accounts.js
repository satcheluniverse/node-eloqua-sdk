'use strict';

/**
 * @ignore
 * @type {AccountExports}
 */
let AccountExports = require('./exports');
/**
 * @ignore
 * @type {AccountImports}
 */
let AccountImports = require('./imports');
/**
 * @ignore
 * @type {AccountFields}
 */
let AccountFields = require('./fields');
/**
 * @ignore
 * @type {AccountLists}
 */
let AccountLists = require('./lists');
/**
 * @ignore
 * @type {AccountSyncAction}
 */
let AccountSyncActions = require('./syncActions');

/**
 * Accounts Class
 * @class Accounts
 * @main EloquaApi
 * @exports Accounts
 * @constructor
 */
class Accounts {

  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {

    this.exports = new AccountExports(options);
    this.imports = new AccountImports(options);
    this.fields = new AccountFields(options);
    this.lists = new AccountLists(options);
    this.syncActions = new AccountSyncActions(options);
  }
}

module.exports = Accounts;
