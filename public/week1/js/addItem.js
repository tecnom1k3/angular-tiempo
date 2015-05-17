angular.module('MyApp', [])
    .controller('FirstController', ['$scope', function($scope) {

        // newPerson is our first model.
        // We are going to bind it to the form
        $scope.newPerson = {
            name: '',
            age: '',
            email: ''
        };

        // javascript array in charge of getting all Persons objects
        $scope.groupList = [];

        // this function is in charge of pushing all the new persons
        // to the groupList array.
        $scope.onAddPerson = function() {
            $scope.groupList.push({
                name: $scope.newPerson.name,
                age: $scope.newPerson.age,
                email: $scope.newPerson.email
            });

            // We clear the newPerson model so we can clean the form
            $scope.newPerson = {
                name: '',
                age: '',
                email: ''
            };
        };

    }]);