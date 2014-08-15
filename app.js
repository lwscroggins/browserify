'use strict';

var $ = require('jquery');
var pal = require('./palindrome');

$('li').forEach(function(e) {
  console.log(pal(e.val() ));
})