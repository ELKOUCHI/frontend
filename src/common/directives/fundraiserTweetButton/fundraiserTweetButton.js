'use strict';

angular.module('directives').directive('fundraiserTweetButton', function() {
  return {
    templateUrl: 'common/directives/templates/fundraiserTweetButton.html',
    replace: true,
    scope: {
      fundraiser: '='
    },
    link: function(scope) {
      console.log('fundraiserTweetButton', scope);

      var twitterShareUrlForFundraiser = function(fundraiser) {
        var twitterShareUrlParams = {
          text: ("Support " + (fundraiser.title) + " on @Bountysource!"),
          url: $filter('encodeUriQuery')(fundraiser.frontend_url)
        };
        return "https://platform.twitter.com/widgets/tweet_button.html?" + $api.toKeyValue(twitterShareUrlParams);
      };

      scope.$watch('fundraiser', function(fundraiser) {
        console.log(fundraiser);

        if (fundraiser) {
          scope.url = twitterShareUrlForFundraiser(fundraiser);
        }
      });
    }
  }
});
