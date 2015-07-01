var app = angular.module('signupForm', []);

app.directive("optIn", function(){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'signupForm.html',
		replace: true
	}
});