'use strict';

angular.module('app').filter('hex', function() {
  return function(input) {
    if (input) {
      return input.replace(/[^0-9a-f]/i, "");
    }
  };
});