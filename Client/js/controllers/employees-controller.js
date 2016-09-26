var app = angular.module('employeeApp', ['ngResource']);

app.controller('employeesController', ['$scope', '$resource', 
  function($scope, $resource) {
  var Employee = $resource('/api/employees');
  
  Employee.query(function(results) {
    $scope.employees = results;
  });

  $scope.employees = []

  $scope.createEmployee = function() {
    var employee = new Employee();
    employee.name = $scope.employeeName;
    employee.$save(function(result) {
      $scope.employees.push(result);
      $scope.employeeName = '';
    }); 
  }
}]);


