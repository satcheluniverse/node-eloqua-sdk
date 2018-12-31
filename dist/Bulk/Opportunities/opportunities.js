'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _imports = _interopRequireDefault(require("./imports"));

var _fields = _interopRequireDefault(require("./fields"));

var _contacts = _interopRequireDefault(require("./contacts"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Opportunities {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    this.imports = new _imports.default(options);
    this.fields = new _fields.default(options);
    this.contacts = new _contacts.default(options);
  }

}

exports.default = Opportunities;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=opportunities.js.map
