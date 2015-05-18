angular.module('MyApp', []).controller('FirstController', ['$scope', function ($scope) {

    $scope.maxNumber = 100;
    $scope.number = 0;
    $scope.invalid = false;

    /**
     * With this approach, we just need the directive ng-change to trigger it
     */
    $scope.onNumberChange = function () {
        $scope.invalid = ($scope.number > $scope.maxNumber);
    };

    /**
     * With this, you can "watch" every changes in the variable/object
     * http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html
     */

    /*
    $scope.$watch('number', function (newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
            $scope.invalid = ($scope.number >= $scope.maxNumber);
        }
    });
    */

}]);