'use strict';

angular.module('app').controller('FundraiserActivity', function($scope, $routeParams, $api, $pageTitle) {
  $pageTitle.set('Fundraisers', 'Activity');

  $api.fundraiser_activity().then(function(fundraisers) {
    $scope.fundraisers = fundraisers;
    return fundraisers;
  });
});
