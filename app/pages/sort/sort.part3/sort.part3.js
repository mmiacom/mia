angular.module('projectDemo.sortPage.part3',['sortpart3S'])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'sort.part3',
    url:'/part3',
    css:'app/pages/sort/sort.part3/sort.part3.css',
    templateUrl:'app/pages/sort/sort.part3/sort.part3.html',
    controller:'sort.part3'
  })
})
.controller('sort.part3',function($scope,$css,getData_sortpart3){

	$css.add('app/pages/sort/sort.css');
	getData_sortpart3.get('./sortJson/food.json')
	.success(function(response){
//		console.log(response)
		$scope.sortpart3Data=response;
//		console.log($scope.sortpart3Data.categorysInfos.son_category[1].title)
	})
})


