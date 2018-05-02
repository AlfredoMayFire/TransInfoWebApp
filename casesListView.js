(function(){

  var url = "http://136.145.59.111:9000/ListReport/500";
  //var url = "http://localhost:9000/";



  var app = angular.module('casesListView', ["ui.bootstrap.modal","angularjs-dropdown-multiselect","ngMaterial"]);

  app.controller('listViewController', function($scope,$http){
console.log("some func");

    window.onload = function(){
      console.log("Enters func")
      $http.get(url)
      .then(function(response){


        $scope.caseList = response.data["success"];

      });
        console.log("leaves func");
    };
  console.log("leaves controller");

  });
})();
