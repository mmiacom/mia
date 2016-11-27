angular.module('projectDemo.sortPage.part12',['sortpart12S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part12',
    url:'/part12',
    css:'app/pages/sort/sort.part12/sort.part12.css',
    templateUrl:'app/pages/sort/sort.part12/sort.part12.html',
    controller:'sort.part12'
})
})
.controller('sort.part12',function($scope,$css,getData_sortpart12){
//	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart12.get('./sortJson/facehelp.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart12Data=response;
//		console.log($scope.sortpart8Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
