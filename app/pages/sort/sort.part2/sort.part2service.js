angular.module("sortpart2S",[])
.service("getData",function($http){
	this.get = function(url){
		return $http.get(url)
	}

})