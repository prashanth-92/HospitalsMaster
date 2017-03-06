var paitentApp = angular.module('paitentHistoryApp',['ngRoute']);
paitentApp.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/paitentInformation/:id',{
			templateUrl:'./views/paitentInformation.html',
			controller:'paitentInformationController'
		})
		.when('/casehistory',{
			templateUrl:'./views/caseHistory.html',
			controller:'caseHistoryController'
		})
        .when('/casehistory/:id', {
            templateUrl: './views/addHistory.html',
            controller: 'addHistoryController'
        })
		.when('/paitentInformation', {
			templateUrl:'./views/general.html',
			controller:'generalController'
		})
        .when('/generals', {
            templateUrl: './views/generals.html',
            controller: 'generalsController'
        })
     .when('/diagnosisInvestigation', {
         templateUrl: './views/diagnosisInvestigation.html',
         controller: 'diagnosisController'
     })
		.otherwise({
			redirectTo:'/paitentInformation'
		});
	
}]);

//directive to capture after ng-repeat is done
paitentApp.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});

paitentApp.service('paitentAppService',function(){
	this.getAllPaitentData = function(){
		 data =  [  
				   {id:'1',  name:'Prashanth', 	dob:'01/01/2003' , country:'UK'		, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'2',  name:'Narayanan', 	dob:'01/05/2003' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'3',  name:'Prem', 		dob:'06/08/2005' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'4',  name:'Surendar', 	dob:'01/01/2003' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'5',  name:'Raja', 		dob:'01/01/2003' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'6',  name:'Pradeep', 	dob:'12/01/2003' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'7',  name:'Rama', 		dob:'05/01/1991' , country:'US'		, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'8',  name:'Saqi', 		dob:'01/01/2006' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'9',  name:'Safi', 		dob:'06/08/1993' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'10', name:'Thameem', 	dob:'01/01/1992' , country:'UK'		, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'11', name:'Faizal', 	dob:'01/01/2003' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'12', name:'Nandhini', 	dob:'01/05/1995' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'F', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'},
		 		   {id:'13', name:'Stuart', 	dob:'01/01/1952' , country:'India'	, state:'Tamil Nadu' , city: 'Chennai' ,address:'1 Downing Street', fathername:'George', gender:'M', maritalStatus:'Married', occupation:'Manager IT Operations', relegion:'Hindu',pincode:'600012', email:'abc@xyz.com', mobile:'9876543210', homephone: '044-12345678'}
				   
				];
		return data;
	}
	
	this.getPaitentData = function(id){
		//only for dev purpose
		var data = this.getAllPaitentData();
		//array index starts from 0
		return data[id-1];
	}
})

paitentApp.controller('paitentInformationController',paitentInformationController);
function paitentInformationController($scope, $routeParams ,paitentAppService){
	console.log($routeParams.id);
	/*if(routeParams.id==0){
		$scope.data = {};
	}
	else{
		$scope.data = paitentAppService.getPaitentData($routeParams.id);
	}*/
	$scope.data = paitentAppService.getPaitentData($routeParams.id);
	$scope.name = "paitentInformationController";
	$scope.save = function(){
		window.location.href = "#general";
	}
	$scope.cancel = function(){
		window.location.href = "#general";
	}
}

paitentApp.controller('caseHistoryController',caseHistoryController);
function caseHistoryController($scope){
    $scope.name = "caseHistoryController";

    $scope.addHistory = function () {
        window.location.href = "#casehistory/0"
    }
    $scope.editHistory = function (id) {
        window.location.href = "#casehistory/0";
    }
    $scope.deleteHistory = function (id) {
        //window.location.href = "#casehistory/0";
    }
}

paitentApp.controller('addHistoryController', addHistoryController);
function addHistoryController($scope, $routeParams) {
    $scope.name = "addHistoryController";
    $scope.saveHistory = function () {
        window.location.href = "#casehistory";
    }
    $scope.cancelHistory = function () {
        window.location.href = "#casehistory";
    }
    
}

paitentApp.controller('generalController',generalController);
function generalController($scope,paitentAppService){
	$scope.name = "generalController";
	$scope.data = paitentAppService.getAllPaitentData();
	//init data table only after table ng-repeat is completed
	$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
		$('#table1').DataTable();
	});
	
	$scope.addPaitent = function(){
		window.location.href="#paitentInformation/0"
	}
}
paitentApp.controller('generalsController', generalsController);
function generalsController($scope) {
    $scope.name = "generalsController";
    $scope.saveHistory = function () {
        window.location.href = "#generals";
    }
    $scope.cancelHistory = function () {
        window.location.href = "#generals";
    }

}

paitentApp.controller('diagnosisController', diagnosisController);
function diagnosisController($scope) {
    $scope.name = "diagnosisController";
    $scope.saveHistory = function () {
        window.location.href = "#diagnosisInvestigation";
    }
    $scope.cancelHistory = function () {
        window.location.href = "#diagnosisInvestigation";
    }

}