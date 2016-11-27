angular.module('projectDemo.sortPage.part13',['sortpart13S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part13',
    url:'/part13',
    css:'app/pages/sort/sort.part13/sort.part13.css',
    templateUrl:'app/pages/sort/sort.part13/sort.part13.html',
    controller:'sort.part13'
})
})
.controller('sort.part13',function($scope,$css,getData_sortpart13){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart13.get('./sortJson/homelive.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart13Data=response;
//		console.log($scope.sortpart8Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
