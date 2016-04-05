app.factory("counterFactory",["$http", function($http){
	var factory = {};
	factory.counter = function(){
	  $http.get('https://counter-by-site.herokuapp.com/counter/sungkangcodes').success(function(data){
	    console.log(data)
	  })
	}
	return factory
}])