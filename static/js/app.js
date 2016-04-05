var app = angular.module('app', ['ngRoute'])
.config(function($routeProvider, $httpProvider){
	$routeProvider
	.when('/', {
		templateUrl:'static/partials/index.html'
	})
	.otherwise({
		redirectTo: '/'
	});
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
})
.directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});

// .run(['$anchorScroll', function($anchorScroll){
// 	$anchorScroll.yOffset = 50;
// }])