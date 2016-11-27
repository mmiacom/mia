angular.module("sortpart1S",[])
.service("getData_sortpart1",function($http){
	this.get=function(url){
		return $http.get(url);
	}
})
