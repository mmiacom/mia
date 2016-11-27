angular.module('projectDemo.sortPage.part7',['sortpart7S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part7',
    url:'/part7',
    css:'app/pages/sort/sort.part7/sort.part7.css',
    templateUrl:'app/pages/sort/sort.part7/sort.part7.html',
    controller:'sort.part7'
})
})
.controller('sort.part7',function($scope,$css,getData_sortpart7){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart7.get('./sortJson/washProduct.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart7Data=response;
		console.log($scope.sortpart7Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
