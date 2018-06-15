angular.module('phoneDetails')
    .component('phoneDetails', {
        controller: ['$routeParams', '$scope', 'phoneService', function PhoneDetailsController($routeParams, $scope, phoneService) {
            var ctrl = this;
            //$scope.$on('clickedPhone', function(event, phoneId) {
                phoneService.getPhoneDetails($routeParams.phoneId).then(function(data) {
                    ctrl.phone = data;
                });
            //})
        }],
        templateUrl: 'phone-details/phone-details.template.html',
        controllerAs: 'vm'
    });