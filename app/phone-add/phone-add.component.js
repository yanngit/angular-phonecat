angular.module('phoneAdd')
    .component('phoneAdd', {
        controller: ['phoneService', function PhoneAddController(phoneService) {
            var ctrl = this;
            ctrl.newphone = {};
            ctrl.add = function() {
                ctrl.newphone.age = ctrl.saveNumber;
                ctrl.newphone.imageUrl = "img/phones/motorola-charm-with-motoblur.0.jpg";
                ctrl.newphone.id = "samsung-gem";
                phoneService.addPhone(angular.copy(ctrl.newphone));
            }
        }],
        templateUrl: 'phone-add/phone-add.template.html',
        controllerAs: 'vm'
    });