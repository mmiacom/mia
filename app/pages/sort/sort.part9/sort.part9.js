angular.module('projectDemo.sortPage.part9',['sortpart9S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part9',
    url:'/part9',
    css:'app/pages/sort/sort.part9/sort.part9.css',
    templateUrl:'app/pages/sort/sort.part9/sort.part9.html',
    controller:'sort.part9'
})
})
.controller('sort.part9',function($scope,$css,getData_sortpart9){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart9.get('./sortJson/childroom.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart9Data=response;
		console.log($scope.sortpart9Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
