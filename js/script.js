

/* global angular */

///<reference path="angular.js"/>
var app= angular
.module("mymodule",[])
.controller("mycontroller",function($scope ){

 var langs=[
{name:"java",like:0,dislike:0,price:2},
{name:"c++",like:0,dislike:0,price:2},
{name:"c#",like:0,dislike:0,price:2},
{name:"python",like:0,dislike:0,price:2}


 ];


 $scope.langs=langs;
 $scope.value=0;
// $scope.text='text';
// 

 $scope.step=0.1;

  $scope.steptolike=1;
// $scope.submit=function (){
//     if($scope.text){
//         $scope.langs.push(this.text);
//         $scope.text='';
//     }
// }

// -----------------------------------------
 $scope.inclike=function (langs){
     langs.like++;
 };
//******************************************************** 
  $scope.diclike=function (langs){
     langs.dislike++;
 };
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
$scope.range= function (langs){

    langs.price+= $scope.value+$scope.step;
};
$scope.countp= function (langs){

    langs.like+= $scope.value+$scope.steptolike;
};
$scope.countm= function (langs){
    if(langs.like<=0){return }else{
    langs.like+= $scope.value-$scope.steptolike;}
};

$scope.drange= function (langs){
    if(langs.price>0){
    langs.price-= $scope.step;}
};
// ********************************************************
$scope.search=function (item){
                if($scope.searchText==undefined){ return true;}
                else{ if(item.name.toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1
                ||  item.like.toString().toLowerCase().indexOf($scope.searchText.toLowerCase())!= -1          

                ){ return true;}
                else{ return  false;}}
}
//**********************************************************

}); 
