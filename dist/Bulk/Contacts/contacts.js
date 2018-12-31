'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _exports = _interopRequireDefault(require("./exports"));

var _imports = _interopRequireDefault(require("./imports"));

var _fields = _interopRequireDefault(require("./fields"));

var _filters = _interopRequireDefault(require("./filters"));

var _lists = _interopRequireDefault(require("./lists"));

var _scoringModels = _interopRequireDefault(require("./scoringModels"));

var _segments = _interopRequireDefault(require("./segments"));

var _syncActions = _interopRequireDefault(require("./syncActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class Contacts {
  constructor(options) {
    Object.defineProperty(this, _parent, {
      writable: true,
      value: void 0
    });
    this.exports = new _exports.default(options);
    this.imports = new _imports.default(options);
    this.fields = new _fields.default(options);
    this.filters = new _filters.default(options);
    this.lists = new _lists.default(options);
    this.scoringModels = new _scoringModels.default(options);
    this.segments = new _segments.default(options);
    this.syncActions = new _syncActions.default(options);
  }

}

exports.default = Contacts;

var _parent = _classPrivateFieldLooseKey("parent");

module.exports = exports.default;
//# sourceMappingURL=contacts.js.map
