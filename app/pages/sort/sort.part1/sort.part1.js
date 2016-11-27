angular.module('projectDemo.sortPage.part1',["sortpart1S"])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'sort.part1',//锚点
    url:'/part1',//跳转路径 显示在路径输入框中
    css:'app/pages/sort/sort.part1/sort.part1.css',//设置css的路径
    templateUrl:'app/pages/sort/sort.part1/sort.part1.html',//设置html的路径
    controller:"sort.part1"//此处设置controller要的文件控制的范围，此处默认控制sort.part1.html
  })
  .state({
  	name:'detailPage',
  	url:'/detailPage',
  	css:'app/pages/sort/sort.part1/detailPage/detailPage.css',
  	templateUrl:'app/pages/sort/sort.part1/detailPage/detailPage.html',
		controller:"detailPage"
  })
}).controller("sort.part1",function($scope,$css,getData_sortpart1){
//	$('.sort-item').lazyload()
	$css.add('app/pages/sort/sort.css')
	var sortpart1Data = getData_sortpart1.get("./sortJson/milk.json")
	sortpart1Data.success(function(response){
		$scope.sortpart1Data = response;
	})
})
.controller('detailPage',function($scope,$http){
//	console.log(1)
	$http.get('./sortJson/milkdetail1.json')
	.success(function(response){
		$scope.detailData = response;
//		console.log(response)
	})
})

