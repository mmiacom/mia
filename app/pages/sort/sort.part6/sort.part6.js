angular.module('projectDemo.sortPage.part6',['sortpart6S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part6',
    url:'/part6',
    css:'app/pages/sort/sort.part6/sort.part6.css',
    templateUrl:'app/pages/sort/sort.part6/sort.part6.html',
    controller:'sort.part6'
})
})
.controller('sort.part6',function($scope,$css,getData_sortpart6){
	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart6.get('./sortJson/feedProduct.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart6Data=response;
		console.log($scope.sortpart6Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})