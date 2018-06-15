angular.module('dummyModule',[])
    .controller('dummyCtrl', ['$scope', '$http', function dummyCtrl($scope, $http) {
        $scope.persons = [
            {},
            {},
            {}
        ]

        $http.get('phones/phones.json').success(function(data) {
            $scope.tablets = data;
        })

    }])