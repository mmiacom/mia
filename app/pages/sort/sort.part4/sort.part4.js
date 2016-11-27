angular.module('projectDemo.sortPage.part4',['sortpart4S'])
.config(function($stateProvider,$urlRouterProvider){

$stateProvider
.state({
    name:'sort.part4',
    url:'/part4',
    css:'app/pages/sort/sort.part4/sort.part4.css',
    templateUrl:'app/pages/sort/sort.part4/sort.part4.html',
    controller:'sort.part4'
})
})
.controller('sort.part4',function($scope,$css,getData_sortpart4){
	console.log("#####")

	$css.add('app/pages/sort/sort.css');
	getData_sortpart4.get('./sortJson/foodhealth.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart4Data=response;
		console.log($scope.sortpart3Data.categorysInfos.son_category[0].categorys[0].banner_image)
	})
})
