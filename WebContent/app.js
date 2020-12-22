var app = angular.module('weatherApp',[]);

app.controller("WeatherController", 
		['$scope','$http', 
			function($scope,$http) {

			$scope.getWeatherInformation = function(city){
				console.log("city",city);
				if(checkIsNotNull(city) && $scope.weatherData[city]){
					;
				}else{
					var url = "http://api.openweathermap.org/data/2.5/weather?q=~CITY~&appid="+appId;
					url = url.replaceAll("~CITY~", city);
					console.log("weather url >> ",url);
					$http({
						method : "GET",
						url : url
					}).then(function mySuccess(response) {
						console.log("",response);
						$scope.weatherData[city] = angular.copy(response);
						if(!arrayContains(city, $scope.cities)){
							$scope.cities.push(city);
						}
					}, function myError(response) {
						console.log("",response);
					});
				}
			}

			$scope.init = function(){
				console.log("controller initialized");
				$scope.message = "Welcome to minimalistic weather app";
				$scope.cities = ['Pune'];
				$scope.selectedCity = null;
				$scope.weatherData = {};
			}
			$scope.init();
		}]);