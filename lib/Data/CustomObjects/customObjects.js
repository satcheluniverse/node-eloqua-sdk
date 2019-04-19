'use strict';
/**
 * @module
 */

import CustomObjectData from './customObjectData';

/** CustomObjects Class */
export default class CustomObjects {
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
    this.data = new CustomObjectData(this.#parent);
  }
}

