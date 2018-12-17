'use strict';

/**
 * @ignore
 * @type {Users}
 */
let Users = require('./System/users');

/**
 * System Class
 * @class System
 * @main EloquaApi
 * @exports System
 * @constructor
 */
class System {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    /**
     * @property users
     * @type {Users}
     */
    this.users = new Users(options);
  }
}

module.exports = System;
