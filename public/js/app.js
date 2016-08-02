var airplane = angular.module('AirplaneApp', []);

airplane.controller('MainCtrl', ['$scope', '$http', function($scope, $http){

  $scope.plane = {
    model: '',
    manufacturer: '',
    engines: null,
    image: ''
  }

  $http.get('/api/airplanes').then(function success(res){
    console.log(res);
    $scope.planes = res.data;
  }, function error(res){
    console.log(res);
  });

  $scope.delete = function(id, idx){
    $http.delete('/api/airplanes/' + id).then(function success(res){
      console.log(res);
      $scope.planes.splice(idx, 1);
    }, function error(res){
      console.log(res);
    })
  }

  $scope.add = function(){
    $http.post('/api/airplanes', $scope.plane).then(function success(res){
      $scope.planes.push(res.data);
      $scope.plane = {
        model: '',
        manufacturer: '',
        engines: null,
        image: ''
      }
    }, function error(res){
      alert('fail');
      console.log(res);
    });


  }
}]);