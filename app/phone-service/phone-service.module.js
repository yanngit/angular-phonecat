angular.module('phoneProvider', ['ngResource'])
    .factory('phoneService', ['$resource', '$q', '$rootScope',  function($resource, $q, $rootScope) {
        //var listOfAddedPhones = [];
        var saveNumber = 100;
        
        queryPhone = $resource("/phones/:phoneId.json", {phoneId: "phones"});
        
        return {
            getPhones: function() {
                return $q(function (resolve, reject) {
                    queryPhone.query(function(data){
                        /*listOfAddedPhones.forEach(function(value){
                            data.push(value)
                        })*/
                        resolve(data);
                    })
                });
            },
            getPhoneDetails: function(phoneId) {
                return $q(function (resolve, reject) {
                    queryPhone.get({"phoneId": phoneId},function(data) {
                        resolve(data);
                    })
                });
            },
            addPhone: function(phone) {
                //listOfAddedPhones.push(phone);
                saveNumber ++;
                $rootScope.$broadcast('addedPhone', phone);
            }
        };
    }]);