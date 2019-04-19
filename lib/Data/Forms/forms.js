'use strict';
/**
 * @module
 */

import FormData from './formData';

/** Forms Class */
export default class Forms {
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
    this.data = new FormData(this.#parent);
  }

}

