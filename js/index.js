var app = angular.module('invoiceCalculatorApp', []);

app.controller('invoiceCalculatorCtrl', function($scope) {
  $scope.distance = '';
  $scope.calculateTotal = function() {
    if ($scope.distance) {
      if ($scope.distance <= 300) {
        $scope.total = 250;
      } else if ($scope.distance > 300 && $scope.distance <= 1000) {
        $scope.total = 250 + (($scope.distance - 300) * 30);
      } else {
        $scope.total = 250 + (700 * 30) + (($scope.distance - 1000) * 20);
      }

      // Descuento de promoción si corresponde
      if ($scope.total > 500) {
        $scope.total -= $scope.total * 0.1;
      }
    }
  }
});


