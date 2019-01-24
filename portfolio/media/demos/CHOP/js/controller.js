var app = angular.module('sortApp', [])

app.controller('mainController', function($scope, $filter, $http) {
    
    $http.get('js/courses.js').
    success(function(data){
        $scope.courses = data.courses;
        $scope.allCourses = $scope.courses;
        $scope.semester = undefined;
        $scope.search = false;
    }).
    error(function(data) {
        //log error
    });

    $scope.showSemester = function (semester){
        $scope.courses = $filter('filter')($scope.allCourses, {semester: semester});
        $scope.semester = semester;
    };
    
    $scope.showSearch = function (status){  
        $scope.searchCourses = ' ';
        $scope.search = status;
     };
});

app.directive('showFocus', function($timeout) {
  return function(scope, element, attrs) {
    scope.$watch(attrs.showFocus, 
      function (newValue) { 
        $timeout(function() {
            newValue && element[0].focus();
        });
      },true);
  };    
});