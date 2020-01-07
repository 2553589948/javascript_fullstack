"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.set");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var M = function M() {
  (0, _classCallCheck2.default)(this, M);
};

new M();
var p = new Promise(function (resolve, reject) {
  resolve(1);
});
p.then(function (r) {
  console.log(r);
});
var set = new Set([1, 2]);