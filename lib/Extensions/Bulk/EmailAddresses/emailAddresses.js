'use strict';

/**
 * @ignore
 * @type {EmailAddressesImports}
 */
let EmailAddressesImports = require('./imports');

/**
 * Email Addresses Class
 * @class EmailAddresses
 * @main EloquaApi
 * @exports EmailAddresses
 * @constructor
 */
class EmailAddresses {
  /**
   * Constructor
   * @method constructor
   * @param options
   */
  constructor(options) {
    this.imports = new EmailAddressesImports(options);
  }
}

module.exports = EmailAddresses;
