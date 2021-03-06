'use strict';
//Directive
myApp.directive('footerSection', ['$rootScope',function ($rootScope) {
    return {
        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        scope: {
            //@ reads the attribute value, = provides two-way binding, & works with functions
            title: '@'         },
        templateUrl: 'pages/footer-section.html',
        controller: function ($scope) {
	      $scope.name = 'jwright04';

	    },
        link: function ($scope, element, attrs) { } //DOM manipulation
    }
}]);
