'use strict';
module.exports = function(word) {
  var reverse = require('./reverse_string');
  return word === reverse(word);
};