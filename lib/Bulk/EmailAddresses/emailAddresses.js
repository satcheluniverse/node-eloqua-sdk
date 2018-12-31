'use strict';
/**
 * @module
 */

import EmailAddressesImports from './imports';

/** Email Addresses Class */
export default class EmailAddresses {
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
    this.imports = new EmailAddressesImports(options);
  }
}

