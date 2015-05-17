angular.module('MyApp', []).controller('FirstController', ['$scope', function($scope) {

    // Regular javascript String array
    $scope.nameList = ['Jorge', 'Pamela', 'David', 'Liliana'];

    // Regular javascriot Objects array
    $scope.personList = [{
        'name': 'Jorge',
        'age': 30
    }, {
        'name': 'Liliana',
        'age': 40
    }, {
        'name': 'Pamela',
        'age': 24
    }];

}]);