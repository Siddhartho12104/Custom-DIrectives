var app = angular.module('mainApp', []);
 
    app.controller("MainCtrl", function($scope){
        $scope.ctrlRole = "hello"
    });
 
    app.directive("myEmployee", function() {
 
        return {
            scope:
            {
                role:"="
            },
            template: 'Directive : <input type="text" ng-model="role">'
        };
    });