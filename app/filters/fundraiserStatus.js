'use strict';

angular.module('app.filters').filter('fundraiserStatus', function() {
  return function(fundraiser) {
    if (!fundraiser) { return ""; }
    if (!fundraiser.published) { return "draft"; }
    else if (fundraiser.published && fundraiser.in_progress) { return "published"; }
    else if (!fundraiser.in_progress) { return "completed"; }
    else { return ""; }
  };
});