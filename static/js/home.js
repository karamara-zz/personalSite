
app.controller('sideNavController',['counterFactory', function(counterFactory){
	counterFactory.counter();
	this.hoover = function(object){
		object.color = "#5E7ECC"
	}
	this.mouseleaved =function(obj){
		obj.color = "#FFFFFF"
	}
	this.email = {color : "#FFFFFF"}
	this.github = {color : "#FFFFFF"}
	this.linkedin = {color : "#FFFFFF"}
}])