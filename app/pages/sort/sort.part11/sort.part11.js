angular.module('projectDemo.sortPage.part11',['sortpart11S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part11',
    url:'/part11',
    css:'app/pages/sort/sort.part11/sort.part11.css',
    templateUrl:'app/pages/sort/sort.part11/sort.part11.html',
    controller:'sort.part11'
})
})
.controller('sort.part11',function($scope,$css,getData_sortpart11){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart11.get('./sortJson/walk.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart11Data=response;
		console.log($scope.sortpart11Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
