angular.module('sortpart12S',[])//给这个angular模块取一个名字    现在没有依赖模块  所以就是空
.service("getData_sortpart12",function($http){//给这个请求数据的服务取一个名字  
	this.get=function(url){
		return $http.get(url);
	}
})
