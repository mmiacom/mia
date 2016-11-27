angular.module("detailPageS",[])
.service("getData_detailPage",function($http){
	this.get=function(url){
		return $http.get(url);
	}
})
