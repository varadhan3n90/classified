(function(){

	var work = function(){
		console.log("Working hard");
	};

	var dowork = function(f){

		console.log("starting");
		try{
			f();
		} catch(ex){
			console.log(ex);
		}
		console.log("end");
	};

	dowork(work);

	var createWorker = function(){

		var workCount = 0;

		var task1 = function(){
			workCount += 1;
			console.log("task1 " + workCount );
		};

		var task2 = function(){
			workCount += 1;
			console.log("task2 " + workCount);
		};

		return {
			job1: task1,
			job2: task2
		};
	};

	var worker = createWorker();

	worker.job1();
	worker.job2();

}());

(function(){
var app = angular.module("awesomeAngular",[]);

var MainController = function($scope,$http){

	// ====================================
	// Example to set values using angular
	// ====================================
	$scope.person = {
		firstName: "Varadhan",
		lastName: "V V"
	};

	$scope.message = "Hello, awesomeness!!";
	
	// ====================================
	// Get values using http
	// ====================================

	var onUserComplete = function(response){
		$scope.user = response.data;
		$http.get($scope.user.repos_url)
			 .then(onRepos,onUserError)
	};

	var onUserError = function(response){
		$scope.error = response.data;		
	};

	var onRepos = function(response){
		$scope.repos = response.data;
		console.log('repos data: '+response.data)
	};

	var promise = $http.get("https://api.github.com/users/"+$scope.username);

	promise.then(function(response,error){
		if(!error)
			onUserComplete(response);
		else
			onUserError(error);
	});

	
	$scope.search = function(username){
		$http.get("https://api.github.com/users/"+$scope.username)
			.then(function(response,error){
				if(!error)
					onUserComplete(response);
				else
					onUserError(error);
			});

	};

};

app.controller("MainController",MainController);

}());
