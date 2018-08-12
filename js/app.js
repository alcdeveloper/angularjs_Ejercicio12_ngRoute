var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){

  $scope.menuSuperior = "parciales/menu.html";

  $scope.setActive = function(option){
  	$scope.mInicio="";
  	$scope.mProfesores="";
  	$scope.mAlumns="";

  	$scope[option] ="active";
  }

}]);


app.filter('telefono',function(){
		return function(numero){
			return numero.substring(0,4) + "-"+numero.substring(4);
		}
});
