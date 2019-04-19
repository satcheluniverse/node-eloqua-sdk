'use strict';
/**
 * @module
 */

import AccountGroups from './accountGroups';

/** Data Accounts Class */
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
    this.#parent = options;
    this.groups = new AccountGroups(this.#parent);
  }

}

