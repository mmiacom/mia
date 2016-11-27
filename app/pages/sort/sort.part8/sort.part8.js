angular.module('projectDemo.sortPage.part8',['sortpart8S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part8',
    url:'/part8',
    css:'app/pages/sort/sort.part8/sort.part8.css',
    templateUrl:'app/pages/sort/sort.part8/sort.part8.html',
    controller:'sort.part8'
})
})
.controller('sort.part8',function($scope,$css,getData_sortpart8){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart8.get('./sortJson/childshoes.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart8Data=response;
		console.log($scope.sortpart8Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
