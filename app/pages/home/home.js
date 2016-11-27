angular.module('projectDemo.homePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'home',
    url:'/home',
    css:'app/pages/home/home.css',
    templateUrl:'app/pages/home/home.html',
    controller:'homeCtrlHot',
    controller:'swipers'
  })
  
})
.controller('homeCtrlHot',["jsonHot","$scope",function(jsonHot,$scope){
		
	
		
    
    jsonHot.getexHot().success(function(res){
        console.log(res);
        $scope.resPRO2 = res.res;
    })
    //点击加载更多
    $scope.loading = function(){
        jsonHot.getnewHot().success(function(res){
            console.log(res);
            $scope.resPRO = res.res;
        })
        $scope.isshow = false;
    }
    $scope.isshow = true;

}])
.service("jsonHot",function($http){
    this.getnewHot = function(){
        return $http.get('json/newHot.json')
    }
    this.getexHot = function(){
        return $http.get("json/exHot1.json")
    }
    this.getexHot = function(){
        return $http.get("json/exHot1.json")
    }
    
    
})
.controller("swipers",function($scope,$http,$timeout){
	$http.get("http://www.vrserver.applinzi.com/aixianfeng/apihome.php")
		.success(function(res){
//			console.log(res.data.slide)
			$scope.swiperData = res.data.slide;

				$timeout(function(){
					var mySwiper = new Swiper('.swiper-container',{
							autoplay:2000,
//							direction:"vertical",
							autoplayDisableOnInteraction:false,
							pagination:'.swiper-pagination',
							loop:true,
							paginationClickable:true
//						effect : 'cube',
//						cube:{
//							slideShadows: true,
//						  shadow: true,
//						  shadowOffset: 100,
//						  shadowScale: 0.6
//						}
//						observeParents:true,
//						observe:true
					})

				},100)
		})
		
		
		
		console.log($(".headline-column li:even"))
//		$(document).ready(function(){
////			$(".headline-column li:even").addClass('lieven');
//		})
//		$(function(){
	$timeout(function(){
			$(".headline-column").myScroll({
				speed:80,
				rowHeight:108
			})
			},100)
//			console.log($("div.headline-column"))
//		})
})


