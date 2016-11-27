angular.module('projectDemo.sortPage.part2',["sortpart2S"])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'sort.part2',
    url:'/part2',
    css:'app/pages/sort/sort.part2/sort.part2.css',
    templateUrl:'app/pages/sort/sort.part2/sort.part2.html',
    controller:"sort.part2"
  })
}).controller("sort.part2",function($scope,$css,getData){
	$css.add('app/pages/sort/sort.css')
//		console.log("#######");
			var data = getData.get("./sortJson/buttNurse.json");
			data.success(function(response){
			$scope.data = response;
//				console.log(response);
//					console.log(response.categorysInfos.son_category[0].categorys[0].banner_image)
		})

  })

