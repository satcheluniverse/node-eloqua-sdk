'use strict';
/**
 * @module
 */

import Users from './System/users';

/** System Class */
export default class System {
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
    /**
     * @property users
     * @type {Users}
     */
    this.users = new Users(options);
  }
}

