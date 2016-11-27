angular.module('projectDemo.sortPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'sort',
    url:'/sort',
    css:'app/pages/sort/sort.css',
    templateUrl:'app/pages/sort/sort.html',
    controller:'sortCtrl'
  })
	
})

.controller('sortCtrl',function($scope){
//	$css.add('app/pages/sort/sort.css');
//		$.each($(".sort-aside li"),function(m,n){
//			$(".sort-aside li").css({
//				background:"#f6f6f6"
//			})
//		})
		$.each($(".sort-aside li"),function(m,n) {
			$(n).bind('touchstart',function(){				
				$(".sort-aside span").animate({top:m*1.361111+"rem"},100);
			})
		});	
	})