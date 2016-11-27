angular.module('projectDemo.homePage.milkhome',["milkhome"])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'milkhome',//锚点
    url:'/milkhome',//跳转路径 显示在路径输入框中
    css:'app/pages/home/milkhome/milkhome.css',//设置css的路径
    templateUrl:'app/pages/home/milkhome/milkhome.html'//设置html的路径
//  controller:"milkhome"//此处设置controller要的文件控制的范围，此处默认控制sort.part1.html
  })
})
//.controller("milkhome",function($scope,$css,milkhomeData){
//	console.log("#######");
//	$css.add('app/pages/sort/sort.css')
//	milkhomeData.get("./sortJson/milk.json")
//	.success(function(response){
//		$scope.sortpart1Data = response;
//		console.log(response);
//	})
//})
