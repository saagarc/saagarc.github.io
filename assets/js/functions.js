// $( document ).ready(function() {

// 	$(".pagebody").css("display", "none");
//     $(".pagebody").fadeIn(2000);

//     $("a.transition").click(function(event){
//         event.preventDefault();
//         linkLocation = this.href;
//         $("pagebody").fadeOut(1000, redirectPage);      
//     });
         
//     function redirectPage() {
//         window.location = linkLocation;
//     }
// });


var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/test", {
        templateUrl : "test.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});