var phoneList = angular.module('phoneList');

phoneList.component('phoneList', {
    
    templateUrl: 'phone-list/phone-list.template.html',
    
    controller: ['phoneService', '$scope', '$rootScope', function PhoneListController(phoneService, $scope, $rootScope) {
        var ctrl = this;
        phoneService.getPhones().then(function(data) {
            ctrl.phones = data;
        });

        $scope.$on('addedPhone', function(event, phone) {
            ctrl.phones.push(phone);
            /*phoneService.getPhones().then(function(data) {
                ctrl.phones = data;
            });*/
        })

        ctrl.viewDetails = function(phoneId) {
            $rootScope.$broadcast('clickedPhone', phoneId);
        }

        ctrl.viewDetailsBis = function(phoneId) {
            return phoneService.getPhoneDetails(phoneId);
        }

        ctrl.viewDetailsTer = function(phoneId) {
            phoneService.getPhoneDetails(phoneId);
        }

    }],
    
    controllerAs: 'vm'
});