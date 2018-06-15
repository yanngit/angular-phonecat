angular.module('phoneCatApp')
    .config(['$routeProvider', '$locationProvider', function config($routeProvider, $locationProvider) {
        $routeProvider.
            /*when('/phones', {
                template: '<phone-list></phone-list>'                
            })            
            .when('/phones/:phoneId', {
                template: '<phone-details></phone-details>' 
            })*/
            /*when('/phones', {
                template: '<phone-list></phone-list><phone-details></phone-details>' 
            })*/
            when('/phones/:phoneId', {
                template: '<phone-details></phone-details>' 
            })
            .otherwise('/phones');
    }]);