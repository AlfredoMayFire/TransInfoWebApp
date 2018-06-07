(function(){

  var url = "http://136.145.59.111:9000/ListReport/500";
  //var url = "http://localhost:9000/";


  var app = angular.module('casesListView', ["ui.bootstrap.modal","angularjs-dropdown-multiselect","ngMaterial"]);

  app.controller('listViewController', function($scope,$http){

    window.onload = function(){
      console.log("Enters func")
      $http.get(url)
      .then(function(response){


        $scope.caseList = response.data["success"];

      });

    };

/*
    $("#table-cases").tablesorter();
    $('#table-cases').pbTable({
      selectable:true,
      sortable:true,
      toolbar:{
        enabled:false,
        filterBox:false
      }
    });
*/
    this.onCaseNumberDashboardClick = function(){
      console.log("dashboard option clicked")

      if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
      sessionStorage.clear();
      } else {
    // Sorry! No Web Storage support..
      console.log("No web Storage support")
    }

      var caseViewUrl = "transinfo.html";
     window.location = caseViewUrl;
    }

    this.onListItemClick = function(Case){
      console.log("Item Clicked", Case)

      if (typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
      sessionStorage.caseNum = Case.CaseNumber;
      } else {
    // Sorry! No Web Storage support..
      console.log("No web Storage support")
    }

      var caseViewUrl = "transinfo.html";
     window.location = caseViewUrl;
    };

  });
})();
