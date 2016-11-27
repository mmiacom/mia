angular.module('projectDemo.sortPage.part10',['sortpart10S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part10',
    url:'/part10',
    css:'app/pages/sort/sort.part10/sort.part10.css',
    templateUrl:'app/pages/sort/sort.part10/sort.part10.html',
    controller:'sort.part10'
})
})
.controller('sort.part10',function($scope,$css,getData_sortpart10){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart10.get('./sortJson/toyBook.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart10Data=response;
//		console.log($scope.sortpart8Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
