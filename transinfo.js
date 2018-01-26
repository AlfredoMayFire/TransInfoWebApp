//http://136.145.59.111:9000/
// http://localhost:9000/cities
//Wrap entire app in a closure
(function(){

  var url = "http://136.145.59.111:9000/";
  //var url = "http://localhost:9000/";

  var Info = "";
  var idCrashBasicInformation;
  var idPersonfk;
  var idVehiclefk;
  var page1;
  var page2;
  var page3;
  var page4;
  var page5;
  var page6;
  var page7;
//hola

  var app = angular.module('transinfo', ["ui.bootstrap.modal","angularjs-dropdown-multiselect","ngMaterial"]);

  app.controller('PanelController', function($scope,$http,$mdDialog){

    $scope.reportSearched = true;

    $scope.settings = { selectionLimit: 1 };
    //pagina 2
    $scope.example1model = {};
    $scope.model2 = {};
    $scope.model3 = {};
    $scope.model4 = {};
    $scope.model5 = {};
    $scope.model6 = {};
    $scope.model7 = {};
    $scope.model8 = {};
    $scope.model9 = {};
    $scope.model10 = {};
    $scope.model11 = {};
    $scope.model12 = {};
    $scope.model13 = {};
    $scope.model14 = {};
    $scope.model15 = {};
    $scope.model16 = {};
    $scope.model17 = {};
    $scope.model18 = {};
    $scope.model19 = {};
    $scope.model20 = {};
    //pagina3
    $scope.info1 = {};
    $scope.info2 = {};
    $scope.info3 = {};
    $scope.info4 = {};
    //pagin4 vehiculo extendido
    $scope.information1 = {};
    $scope.information2 = {};
    $scope.information3 = {};
    $scope.information4 = {};
    $scope.information5 = {};
    $scope.information6 = {};
    $scope.information7 = {};
    $scope.information8 = {};
    $scope.information9 = {};
    $scope.information10 = {};
    $scope.information11 = {};
    $scope.information12 = {};
    $scope.information13 = {};
    $scope.information14 = {};
    $scope.information15 = {};
    $scope.information16 = {};
    $scope.information17 = {};
    $scope.information18 = {};
    $scope.information19 = {};
    $scope.information20 = {};
    $scope.information21 = {};
    $scope.information22 = {};
    $scope.information23 = {};
    $scope.information24 = {};
    $scope.information25 = {};
    $scope.information26 = {};
    $scope.information27 = {};
    $scope.information28 = {};
    $scope.information29 = {};
    $scope.information30 = {};
    $scope.information31 = {};
    $scope.information32 = {};
    $scope.information33 = {};
    $scope.information34 = {};
    $scope.information35 = {};
    $scope.information36 = {};
    $scope.information37 = {};
    $scope.information38= {};
    $scope.information39 = {};

    //persona extendida
    $scope.dataInfo1 = {};
    $scope.dataInfo2 = {};
    $scope.dataInfo3 = {};
    $scope.dataInfo4 = {};
    $scope.dataInfo5 = {};
    $scope.dataInfo6 = {};
    $scope.dataInfo7 = {};
    $scope.dataInfo8 = {};
    $scope.dataInfo9 = {};
    $scope.dataInfo10 = {};
    $scope.dataInfo11 = {};
    $scope.dataInfo12 = {};
    $scope.dataInfo13 = {};
    $scope.dataInfo14 = {};
    $scope.dataInfo15 = {};
    $scope.dataInfo16 = {};
    $scope.dataInfo17 = {};
    $scope.dataInfo18 = {};
    $scope.dataInfo19 = {};
    $scope.dataInfo20 = {};
    $scope.dataInfo21 = {};
    $scope.dataInfo22 = {};
    $scope.dataInfo23 = {};

    //pagina1
    $scope.example1data = [{id:1,label:""}];//Cities
    $scope.data2 = {};//typeAccident;
    $scope.data3 = {};//municipio;
    $scope.data4 = {};//cercaDe;
    $scope.data5 = {};//medida;
    $scope.data6 = {};//propertyType;
    $scope.data7 = {};//zoneType;
    $scope.data8 = {};//puntoCardinal;
    $scope.data9 = {};//ubicacion;


    // Info = "blah";
    this.Info = Info;
    this.Stuff = {};

    this.SubmitPageOne = function(){
      page1.address = $scope.address;
      page1.crashType = $scope.selectedReport;
      page1.caseNumber = $scope.caseNumber;
      page1.cityDescriptionES = $scope.selectedState;
      page1.countryDescriptionES = $scope.selectedCounty;
      page1.nearToDescriptionEs = $scope.selectedNear;
      page1.name = $scope.nearToName;
      page1.distance = $scope.distance;
      page1.measurementDescriptionES = $scope.selectedMeasure;
      page1.directionDescriptionES = $scope.selectedCardinal;
      page1.propertyDescriptionES = $scope.selectedProperty;
      page1.zoneTypeDescriptionES = $scope.selectedZoneType;
      page1.locationDescriptionES = $scope.selectedLocation;
      $http.post(url+"crashBasicInformationEdit",page1)
      .then(function(response){
        alert("Successfully updated!");
      });
    };
    this.SubmitPageTwo = function(){
      page2.collisionTypeDescriptionES = $scope.selectedCollision;
      page2.eventDescriptionES = $scope.selectedEvent;
      page2.eventLocationDescriptionES = $scope.selectedLocationE;
      page2.mannerofColisionDescriptionES = $scope.selectedCollisionForm;
      page2.weatherConditionUno = $scope.selectedWeather1;
      page2.weatherConditionDos = $scope.selectedWeather2;
      page2.visibilityCondition = $scope.selectedVisibility;
      page2.pavementCondition = $scope.selectedPavimento;
      page2.environmental = $scope.selectedAmbiente;
      page2.roadDescription = $scope.selectedRoadCircum;
      page2.withinInterchange = $scope.selectedIntersection;
      page2.specifLocation = $scope.selectedSpecificPlace;
      page2.schoolBusRelated = $scope.selectedBusField;
      page2.inserctionType = $scope.selectedIntersectionType;
      page2.nearConstruction = $scope.selectedConstructionRelated;
      page2.workerZoneType = $scope.selectedWorkTypeZone;
      page2.crashLocation = $scope.selectedWorkLocation;
      page2.policePresent = $scope.selectedPolicePresence;
      page2.workerPresent = $scope.selectedWorkersPresence;
      $http.post(url+"CrashConditionsEdit",page2)
      .then(function(response){
          alert("Successfully updated!");
      });
    };
    this.SubmitPageThree = function(){
      page3.name = $scope.firstLast;
      page3.gender = $scope.selectedGender;
      page3.licenseType = $scope.selectedLicenseType;
      page3.licenceNumber = $scope.numLicense;
      page3.expirationDate = $scope.expDate;
      page3.neighborhood = $scope.urb;
      page3.streetName = $scope.calle;
      page3.city = $scope.ciudad;
      page3.stateCountry = $scope.estadoPais;
      page3.zipCode = $scope.zip;
      page3.phoneNumber = $scope.phone;
      page3.organDonor = $scope.selectedOrgan;

      $http.post(url+"NewPersonEdit",page3)
      .then(function(response){
          alert("Successfully updated!");
      });
    };
    this.SubmitPageFour = function(){
      page4.plateNumber = $scope.plateNumber;
      page4.vehicleJurisdiction = $scope.vehicleJurisdiction;
      page4.state = $scope.state;
      page4.vin = $scope.vin;
      page4.year = $scope.year;
      page4.make = $scope.make;
      page4.modelos = $scope.modelos;
      page4.registrationNumber = $scope.registrationNumber;
      page4.insuranceCompany = $scope.insuranceCompany;
      page4.purchaseDate = $scope.purchaseDate;
      page4.expirationDate = $scope.expirationDate;

      $http.post(url+"NewVehicleEdit",page4)
      .then(function(response){
        alert("Successfully updated!");
      });
    };
    this.SubmitPageFive = function(){
      page5.vehicleType = $scope.selectedVehicleType;
      page5.directionTripCB = $scope.selectedTravelDirection;
      page5.functionSpecialMVT = $scope.selectedSpecialFunction;
      page5.motorEmergencyVU = $scope.selectedEmergencyMotorVehicle;
      page5.mPH = $scope.mPH;
      page5.mPHDescription = $scope.mPHDescription;
      page5.maneuverVehicleMotor = $scope.selectedAction;
      page5.occupants = $scope.occupants;
      page5.descriptionRoad = $scope.selectedRoadDescription;
      page5.alignment = $scope.selectedAlignment;
      page5.slope = $scope.selectedInclination;
      page5.laneCantidad = $scope.laneCantidad;
      page5.laneCategoria = $scope.selectedTypeCategoryLane;
      page5.laneTipoCarril = $scope.selectedLaneType;
      page5.typeControlTraffic = $scope.selectedTCDT;
      page5.inOperationLost = $scope.selectedTCDW;
      page5.primeraCategoriaEvent = $scope.selectedHarmfulEventCategories;
      page5.segundaCategoriaEvent = $scope.selectedHarmfulEventCategories1;
      page5.terceraCategoriaEvent = $scope.selectedHarmfulEventCategories2;
      page5.cuartaCategoria = $scope.selectedHarmfulEventCategories3;
      page5.primerEvent = $scope.selectedHarmfulEvent;
      page5.segundoEvent = $scope.selectedHarmfulEvent1;
      page5.tecerEvent = $scope.selectedHarmfulEvent2;
      page5.cuartoEvent = $scope.selectedHarmfulEvent3;
      page5.busUse = $scope.selectedBusUse;
      page5.lefthPlace = $scope.selectedHitAndRun;
      page5.towedDamage = $scope.selectedTowedBy;
      page5.primerDefectoMecánico = $scope.selectedDefects1;
      page5.segundoDefectoMecánico = $scope.selectedDefects2;
      page5.initialContactPoint = $scope.selectedContactPoints;
      page5.affectedArea = $scope.selectedAffectedAreas;
      page5.extendDamage = $scope.selectedDamageExtent;
      page5.commercialVehicleUse = $scope.selectedOfficialVehicle;
      page5.vehicleMoving = $scope.selectedVehicleMovement;
      page5.authorizedDriver = $scope.selectedAuthorizedDriver;
      page5.inspectionUpdate = $scope.selectedInspectionUpToDate;
      page5.specialPermit = $scope.selectedSpecialPermission;
      page5.grossWeight = $scope.selectedPesoBruto;
      page5.totalAxis = $scope.totalAxis;
      page5.vehicleConfiguration = $scope.selectedConfiguration;
      page5.heavyVehicleType = $scope.selectedCargoVehicleType;
      page5.hazardousMaterial = $scope.selectedHazardousInvolved;
      page5.thereHazardousMaterial = $scope.selectedHazardousReleased;
      page5.diamondIdNumber = $scope.diamondIdNumber;
      $http.post(url+"VehicleExtendEdit",page5)
      .then(function(response){
        alert("Successfully updated!");
      });
    };

    this.SubmitPageSix = function(){

      page6.row = $scope.rows;
      page6.seat = $scope.seats;
      page6.otherLocation = $scope.seatingOthers;
      page6.restraintSystem = $scope.restraintSystems;
      page6.airbagsActivation = $scope.airbagDeployed;
      page6.expulsion = $scope.ejections;
      page6.speedRelated = $scope.speedingSuspected;
      page6.extraction = $scope.extrications;
      page6.driverCirncunstanceBC = $scope.contribActionsCircumstances;
      page6.distractedBy = $scope.distractedBy;
      page6.conditionCollisionTime = $scope.conditions;
      page6.safetyEquipmentUsed = $scope.safetyEquipments;
      page6.suspectAlcoholUse = $scope.substancesSuspected;
      page6.testStatusAl = $scope.testStatuses;
      page6.testTypeAl = $scope.drugTestTypes;
      page6.testResultAl = $scope.alcoholTestResults;
      page6.suscpectControlledSubstances = $scope.substancesSuspected;
      page6.testStatusSub = $scope.testStatuses2;
      page6.testTypeSub = $scope.drugTestTypes2;
      page6.testResultSub = $scope.alcoholTestResults2;
      page6.actionsBeforeCollision = $scope.actionsPriorToCrash;
      page6.inWayToSchool = $scope.toFromSchool;
      page6.roactionsAtCollisionTimew = $scope.actionsAtTimeOfCrash;
      page6.locationWhenCollision = $scope.locationWhenCollision;
      page6.transportedByME = $scope.transportedByME;
      page6.transportedTo = $scope.transportedTo;
      page6.transportedBy = $scope.transportedBy;
      page6.medicalEmergenciesNumber = $scope.medicalEmergenciesNumber;
      page6.ambulanceCSPNumber = $scope.ambulanceCSPNumber;


      $http.post(url+"PersonExtendInformationEdit",page6)
      .then(function(response){
        alert("Successfully updated!");
      });
    };

    this.SubmitPageSeven = function(){
      page7.notifiedTimePolice = $scope.notifiedTimePolice;
      page7.timeOfArrivalPolice = $scope.timeOfArrivalPolice;
      page7.notifiedTimeEmergencie = $scope.notifiedTimeEmergencie;
      page7.timeOfArrivalEmergencie = $scope.timeOfArrivalEmergencie;
      page7.details = $scope.details;


      $http.post(url+"NarrativeEdit",page7)
      .then(function(response){
        alert("Successfully updated!");
      });
    };
//this.Stuff is the key for the json data, it may or may not match its ng-model counterpart which is $scope._

    this.getCaseInfo = function(){
      $http.get(url + "ListAccidentByCaseNumber/" + $scope.caseNumber)
      .then(function(response){
        console.log(response.data["success"]);
        $scope.reportSearched = false;

        this.Stuff = response.data["success"].ReportList[0];
        page1 = response.data["success"].ReportList[0];
        //console.log(this.Stuff);
        idCrashBasicInformation = response.data["success"].ReportList[0].idCrashBasicInformation;
        $scope.selectedReport = response.data["success"].ReportList[0].crashType;

        //Llenar todo de Accident
        $scope.caseNumber = response.data["success"].ReportList[0].caseNumber;
        $scope.address = response.data["success"].ReportList[0].address;
        $scope.selectedState = response.data["success"].ReportList[0].cityDescriptionES;
        $scope.selectedCounty = response.data["success"].ReportList[0].countryDescriptionES;
        $scope.selectedNear = response.data["success"].ReportList[0].nearToDescriptionEs;
        $scope.nearToName = response.data["success"].ReportList[0].name;
        $scope.distance = response.data["success"].ReportList[0].distance;
        $scope.selectedMeasure = response.data["success"].ReportList[0].measurementDescriptionES;
        $scope.selectedCardinal = response.data["success"].ReportList[0].directionDescriptionES;
        $scope.selectedProperty = response.data["success"].ReportList[0].propertyDescriptionES;
        $scope.selectedZoneType = response.data["success"].ReportList[0].zoneTypeDescriptionES;
        $scope.selectedLocation = response.data["success"].ReportList[0].locationDescriptionES;
        //coger valor de proxima tabla y buscar y llenar todo eso.
        $http.get(url + "CrashConditionsByIdAccident/" + idCrashBasicInformation)
        .then(function(response2){
          this.Stuff = response2.data["success"].ReportList[0];
          page2 = response2.data["success"].ReportList[0];
          //console.log(this.Stuff.accidenteFK);
          $scope.selectedCollision = this.Stuff.collisionTypeDescriptionES;
          $scope.selectedEvent = this.Stuff.eventDescriptionES;
          $scope.selectedLocationE = this.Stuff.eventLocationDescriptionES;
          $scope.selectedCollisionForm = this.Stuff.mannerofColisionDescriptionES;
          $scope.selectedWeather1 = this.Stuff.weatherConditionUno;
          $scope.selectedWeather2 = this.Stuff.weatherConditionDos;
          $scope.selectedVisibility = this.Stuff.visibilityCondition;
          $scope.selectedPavimento = this.Stuff.pavementCondition;
          $scope.selectedAmbiente = this.Stuff.environmental;
          $scope.selectedRoadCircum = this.Stuff.roadDescription;
          $scope.selectedIntersection = this.Stuff.withinInterchange;
          $scope.selectedSpecificPlace = this.Stuff.specifLocation;
          $scope.selectedBusField = this.Stuff.schoolBusRelated;
          $scope.selectedIntersectionType = this.Stuff.inserctionType;
          $scope.selectedConstructionRelated = this.Stuff.nearConstruction;
          $scope.selectedWorkTypeZone = this.Stuff.workerZoneType;
          $scope.selectedWorkLocation = this.Stuff.crashLocation;
          $scope.selectedPolicePresence = this.Stuff.policePresent;
          $scope.selectedWorkersPresence = this.Stuff.workerPresent;
        });

        $http.get(url + "NewPersonByIdAccident/" + idCrashBasicInformation)
        .then(function(response){
          this.Stuff = response.data["success"].ReportList[0];
          page3 = response.data["success"].ReportList[0];
          //console.log(this.Stuff);
          $scope.firstLast = this.Stuff.name;
          $scope.selectedGender = this.Stuff.gender;
          $scope.selectedLicenseType = this.Stuff.licenseType;
          $scope.numLicense = this.Stuff.licenceNumber;
          $scope.expDate = this.Stuff.expirationDate;
          $scope.urb = this.Stuff.neighborhood;
          $scope.calle = this.Stuff.streetName;
          $scope.ciudad = this.Stuff.city;
          $scope.estadoPais = this.Stuff.stateCountry;
          $scope.zip = this.Stuff.zipCode;
          $scope.phone = this.Stuff.phoneNumber;
          $scope.selectedOrgan = this.Stuff.organDonor;
        });

        $http.get(url + "NewVehicleByIdAccident/" + idCrashBasicInformation)
        .then(function(response){


          this.Stuff = response.data["success"].ReportList[0];
          page4 = response.data["success"].ReportList[0];

          idPersonfk = this.Stuff.idPersonaFK;
          idVehiclefk = response.data["success"].ReportList[0].idNewVehicle;

          //console.log(idVehiclefk + " over Here");
          $scope.plateNumber = this.Stuff.plateNumber;
          $scope.vehicleJurisdiction = this.Stuff.vehicleJurisdiction;
          $scope.state = this.Stuff.state;
          $scope.vin = this.Stuff.vin;
          $scope.year = this.Stuff.year;
          $scope.make = this.Stuff.make;
          $scope.modelos = this.Stuff.modelos;
          $scope.registrationNumber = this.Stuff.registrationNumber;
          $scope.insuranceCompany = this.Stuff.insuranceCompany;
          $scope.purchaseDate = this.Stuff.purchaseDate;
          $scope.expirationDate = this.Stuff.expirationDate;
          //$scope.selectedOrgan = this.Stuff.organDonor;

          $http.get(url + "ListVehicleExtend/" + idVehiclefk)
          .then(function(response){
            this.Stuff = response.data["success"].ReportList[0];
            page5 = response.data["success"].ReportList[0];
            //console.log(url + "ListVehicleExtend/" + idVehiclefk);
            $scope.selectedVehicleType = this.Stuff.vehicleType;
            $scope.selectedTravelDirection = this.Stuff.directionTripCB;
            $scope.selectedSpecialFunction = this.Stuff.functionSpecialMVT;
            $scope.selectedEmergencyMotorVehicle = this.Stuff.motorEmergencyVU;
            $scope.mPH = this.Stuff.mPH;
            $scope.mPHDescription = this.Stuff.mPHDescription;
            $scope.selectedAction = this.Stuff.maneuverVehicleMotor;
            $scope.occupants = this.Stuff.occupants;
            $scope.selectedRoadDescription = this.Stuff.descriptionRoad;
            $scope.selectedAlignment = this.Stuff.alignment;
            $scope.selectedInclination = this.Stuff.slope;
            $scope.laneCantidad = this.Stuff.laneCantidad;
            $scope.selectedTypeCategoryLane = this.Stuff.laneCategoria;
            $scope.selectedLaneType = this.Stuff.laneTipoCarril;
            $scope.selectedTCDT = this.Stuff.typeControlTraffic;
            $scope.selectedTCDW = this.Stuff.inOperationLost;
            $scope.selectedHarmfulEventCategories = this.Stuff.primeraCategoriaEvent;
            $scope.selectedHarmfulEventCategories1 = this.Stuff.segundaCategoriaEvent;
            $scope.selectedHarmfulEventCategories2 = this.Stuff.terceraCategoriaEvent;
            $scope.selectedHarmfulEventCategories3 = this.Stuff.cuartaCategoria;
            $scope.selectedHarmfulEvent = this.Stuff.primerEvent;
            $scope.selectedHarmfulEvent1 = this.Stuff.segundoEvent;
            $scope.selectedHarmfulEvent2 = this.Stuff.tecerEvent;
            $scope.selectedHarmfulEvent3 = this.Stuff.cuartoEvent;
            $scope.selectedBusUse = this.Stuff.busUse;
            $scope.selectedHitAndRun = this.Stuff.lefthPlace;
            $scope.selectedTowedBy = this.Stuff.towedDamage;
            $scope.selectedDefects1 = this.Stuff.primerDefectoMecánico;
            $scope.selectedDefects2 = this.Stuff.segundoDefectoMecánico;
            $scope.selectedContactPoints = this.Stuff.initialContactPoint;
            $scope.selectedAffectedAreas = this.Stuff.affectedArea;
            $scope.selectedDamageExtent = this.Stuff.extendDamage;
            $scope.selectedOfficialVehicle = this.Stuff.commercialVehicleUse;
            $scope.selectedVehicleMovement = this.Stuff.vehicleMoving;
            $scope.selectedAuthorizedDriver = this.Stuff.authorizedDriver;
            $scope.selectedInspectionUpToDate = this.Stuff.inspectionUpdate;
            $scope.selectedSpecialPermission = this.Stuff.specialPermit;
            $scope.selectedPesoBruto = this.Stuff.grossWeight;
            $scope.totalAxis = this.Stuff.totalAxis;
            $scope.selectedConfiguration = this.Stuff.vehicleConfiguration;
            $scope.selectedCargoVehicleType = this.Stuff.heavyVehicleType;
            $scope.selectedHazardousInvolved = this.Stuff.hazardousMaterial;
            $scope.selectedHazardousReleased = this.Stuff.thereHazardousMaterial;
            $scope.diamondIdNumber = this.Stuff.diamondIdNumber;

          });
          $http.get(url + "ListPersonExtend/" + idPersonfk)
          .then(function(response){
            console.log(idPersonfk+ " here")
            this.Stuff = response.data["success"].ReportList[0];
            page6 = response.data["success"].ReportList[0];

            $scope.rows = this.Stuff.row;
            $scope.seats = this.Stuff.seat;
            $scope.seatingOthers = this.Stuff.otherLocation;
            $scope.restraintSystems = this.Stuff.restraintSystem;
            $scope.airbagDeployed = this.Stuff.airbagsActivation;
            $scope.ejections = this.Stuff.expulsion;
            $scope.speedingSuspected = this.Stuff.speedRelated;
            $scope.extrications = this.Stuff.extraction;
            $scope.contribActionsCircumstances = this.Stuff.driverCirncunstanceBC;
            $scope.distractedBy = this.Stuff.distractedBy;
            $scope.conditions = this.Stuff.conditionCollisionTime;
            $scope.safetyEquipments = this.Stuff.safetyEquipmentUsed;
            $scope.substancesSuspected = this.Stuff.suspectAlcoholUse;
            $scope.testStatuses = this.Stuff.testStatusAl;
            $scope.drugTestTypes = this.Stuff.testTypeAl;
            $scope.alcoholTestResults = this.Stuff.testResultAl;
            $scope.substancesSuspected = this.Stuff.suscpectControlledSubstances;
            $scope.testStatuses2 = this.Stuff.testStatusSub;
            $scope.drugTestTypes2 = this.Stuff.testTypeSub
            $scope.alcoholTestResults2 = this.Stuff.testResultSub;
            $scope.actionsPriorToCrash = this.Stuff.actionsBeforeCollision;
            $scope.toFromSchool = this.Stuff.inWayToSchool;
            $scope.actionsAtTimeOfCrash = this.Stuff.actionsAtCollisionTime;
            $scope.locationWhenCollision = this.Stuff.locationWhenCollision;
            $scope.transportedByME = this.Stuff.transportedByME;
            $scope.transportedTo = this.Stuff.transportedTo;
            $scope.transportedBy = this.Stuff.transportedBy;
            $scope.medicalEmergenciesNumber = this.Stuff.medicalEmergenciesNumber;
            $scope.ambulanceCSPNumber = this.Stuff.ambulanceCSPNumber;


          });
        });




        $http.get(url + "NarrativeByIdAccident/" + idCrashBasicInformation)
        .then(function(response){
          this.Stuff = response.data["success"].ReportList[0];
          page7 = response.data["success"].ReportList[0];
          //console.log(this.Stuff);
          $scope.notifiedTimePolice = this.Stuff.notifiedTimePolice;
          $scope.timeOfArrivalPolice = this.Stuff.timeOfArrivalPolice;
          $scope.notifiedTimeEmergencie = this.Stuff.notifiedTimeEmergencie;
          $scope.timeOfArrivalEmergencie = this.Stuff.timeOfArrivalEmergencie;
          $scope.details = this.Stuff.details;
        });

      });
    };

    // this.letsPost = function(){
    //   this.newPost = {["CrashType":$scope.selectedReport,
    //   "CaseNumber":$scope.caseNumber,
    //   "CrashDate":
    //
    // ]}
    // };

    this.letsGet = function(){
      $http.get(url + "cities")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.example1data[i] = response.data["payload"][i].DescriptionES
        }
        //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "counties")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data3[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });


      $http.get(url + "reportTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data2[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "properties")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data6[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });


      $http.get(url + "nearTo")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data4[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "directions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data8[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "locations")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data9[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "measurements")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data5[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "zoneTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.data7[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "harmfulEventCategories")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.example1model[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "harmfulEvents")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model2[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "relativeToTrafficways")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model3[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "mannerOfCollisions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model4[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "weatherConditions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model5[i] = response.data["payload"][i].DescriptionES
           $scope.model6[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "lightingConditions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model7[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "roadSurfaces")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model8[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "environmentConditions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model9[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "roadCircumstances")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model10[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "roadSurfaces")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model11[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "junctions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model12[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "schoolBusRelated")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model13[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "intersectionTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model14[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "workzoneRelated")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model15[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "workzoneLocations")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model16[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "workzoneTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model17[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "lawEnforcementPresent")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model18[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "workersPresent")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.model19[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "genders")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.info1[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "driverLicenseTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.info2[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "organDonor")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.info3[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "vehicleJurisdictions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.info4[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information1[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "directionsOfTravel")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information2[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "specialFunctions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information3[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "emergencyUses")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information4[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "actions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information5[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "trafficwayDescriptions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information6[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "roadwayHorizontalAlignments")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information7[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "roadwayGrades")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information8[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "totalLanesCategories")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information9[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "totalLanes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information10[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "TCDTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information11[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "TCDWorking")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information12[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "harmfulEventCategories")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information13[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "harmfulEvents")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information14[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "schoolBusRelated")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information15[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "hitAndRun")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information16[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "towedBy")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information17[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "vehicleCircumstances")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information18[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "initialContactPoints")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information19[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "damagedAreas")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information20[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "extentOfDamages")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information21[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "motorCarrierTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information22[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "vehicleMovements")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information23[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "driverIsAuthorized")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information24[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "driverIsAuthorized")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information25[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "driverIsAuthorized")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information26[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "GVWRGCWR")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information27[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "configurations")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information28[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "cargoBodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information29[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "hazMatInvolved")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information30[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "hazMatReleased")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information31[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "hazMatInvolved")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information32[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information33[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information34[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information35[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information36[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information37[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "bodyTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.information38[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });

      $http.get(url + "rows")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo1[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "seats")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo2[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "seatingOthers")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo3[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "restraintSystems")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo4[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "airbagDeployed")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo5[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "ejections")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo6[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "speedingSuspected")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo7[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "contribActionsCircumstances")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo8[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "distractedBy")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo9[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "conditions")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo10[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "safetyEquipments")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo11[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "testStatuses")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo12[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "drugTestTypes")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo13[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "alcoholTestResults")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo14[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "substancesSuspected")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo15[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "actionsPriorToCrash")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo16[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "toFromSchool")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo17[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "actionsAtTimeOfCrash")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo18[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "nonMotoristLocations")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo19[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "extrications")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo20[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "extrications")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo21[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "substancesSuspected")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo22[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });
      $http.get(url + "drugTestResults")
      .then(function(response){
        //This works but later, asynchronous problems.
        for (var i = 0; i < response.data["payload"].length; i++) {
           $scope.dataInfo23[i] = response.data["payload"][i].DescriptionES
        }
      //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      }).catch(function(data){
        this.Info = "Error";
      });


      // $http.get("http://136.145.59.111:9000/bodytype")
      // .then(function(response){
      //   //This works but later, asynchronous problems.
      //   for (var i = 0; i < response.data["payload"].length; i++) {
      //      $scope.information38[i] = response.data["payload"][i].DescriptionES
      //   }
      // //  //console.log("here is 2 functions: ",$scope.example1data[0]);
      // }).catch(function(data){
      //   this.Info = "Error";
      // });


    };

    this.selectTab = function(setTab){
      this.tab = setTab;
    //this.getInfo();
    //alert($scope.example1data);

    };
    this.isSelected = function(checkTab){
      return this.tab === checkTab;
    };


    this.letsGet();


  });








})();
