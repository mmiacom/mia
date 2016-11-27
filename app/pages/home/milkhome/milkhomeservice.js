angular.module("milkhome",[])
.service("milkhomeData",function($http){
	this.get=function(url){
		return $http.get(url);
	}
})
