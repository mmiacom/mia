angular.module('projectDemo.sortPage.part5',['sortpart5S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part5',
    url:'/part5',
    css:'app/pages/sort/sort.part5/sort.part5.css',
    templateUrl:'app/pages/sort/sort.part5/sort.part5.html',
    controller:'sort.part5'
})
})
.controller('sort.part5',function($scope,$css,getData_sortpart5){
	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart5.get('./sortJson/gravidaProduct.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart5Data=response;
//		console.log($scope.sortpart4Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})