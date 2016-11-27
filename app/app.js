angular.module('projectDemo',['ui.router','angularCSS',
'projectDemo.homePage',
'projectDemo.sortPage',
//'projectDemo.homePage.milkhome',
'projectDemo.cartPage',
'projectDemo.minePage',
'projectDemo.sortPage.part1',

'projectDemo.sortPage.part2',
'projectDemo.sortPage.part3',
'projectDemo.sortPage.part4',
'projectDemo.sortPage.part5',
'projectDemo.sortPage.part6',
'projectDemo.sortPage.part7',
'projectDemo.sortPage.part8',
'projectDemo.sortPage.part9',
'projectDemo.sortPage.part10',
'projectDemo.sortPage.part11',
'projectDemo.sortPage.part12',
'projectDemo.sortPage.part13'
])
//.run(function(){
//	console.log(123);
//	document.documentElement.style.fontSize = innerWidth/10+"px";
//    window.onresize = function(){
//      document.documentElement.style.fontSize = innerWidth/10+"px";
//    }
//})
.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/home')
})
