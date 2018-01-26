//http://136.145.59.111:9000/
// http://localhost:9000/cities
// ["message": , "payload": {
//     AgencyID = 1;
//     ExpirationDate = "2017-11-15 10:09:38";
//     FirstName = Omar;
//     LastName = "Soto Fortu\U00f1o";
//     OfficerID = 1;
//     PlateNumber = 500;
//     Testt = 1;
//     UserID = 1;
//     UserSessionUUID = "086eb620-c9aa-11e7-840a-f30950766286";
// }, "success": 1, "error_code": 200]




(function(){
var url = "http://136.145.59.111:9000/login";
//var url = "http://localhost:9000/login";

var app = angular.module('transinfoLogin',[]);
app.controller('LoginController',function($scope,$http){

 var message = "";

  var config = {
                 headers : {
                     'Content-Type': 'application/x-www-form-urlencoded;'
                 }
             }
$http.defaults.headers.post["Content-Type"] = "application/json";
this.login = function(){

      $http.post(url,
      {
          username: $scope.username,
          password: $scope.password
      },
      function(data, status){
          message = data + status;
          console.log("Data: " + data + "\nStatus: " + status);
      }).then(function(response) {
        if (response.data["payload"].UserID==1) {

          window.location="transinfo.html"
        }
    //alert( response.data["payload"].UserID );
});



 };



});


})();
