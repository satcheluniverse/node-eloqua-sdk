'use strict';
/**
 * @module
 */

import AccountExports from './exports';
import AccountImports from './imports';
import AccountFields from './fields';
import AccountLists from './lists';
import AccountSyncActions from './syncActions';

/** Accounts Class */
export default class Accounts {
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
    this.exports = new AccountExports(options);
    this.imports = new AccountImports(options);
    this.fields = new AccountFields(options);
    this.lists = new AccountLists(options);
    this.syncActions = new AccountSyncActions(options);
  }
}

