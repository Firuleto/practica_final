"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const userSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['admin', 'mortal']
  },
  beersTaken: [{
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: 'Beer'
  }]
});

var _default = _mongoose.default.model('User', userSchema);

exports.default = _default;