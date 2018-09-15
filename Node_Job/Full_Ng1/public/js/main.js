


app.controller('Controller', ['$scope', '$http',
  function ($scope, $http) {
    $scope.editDisplayFlag = false;
    $scope.editItem = {
      id: null,
      value: '',
      name: ''
    }
    $scope.items = [
      { id: 1, value: 'aaaa', name: 'AAA' },
      { id: 2, value: 'bbbb', name: 'BBB' },
      { id: 3, value: 'cccc', name: 'CCC' }
    ];

    $scope.editDisplay = ()=> {
      $scope.editItem = {
        id: null,
        value: '',
        name: ''
      }
      $('#editModal').modal();
      //$scope.editDisplayFlag = true;
    }
    
    $scope.detail = (id) => {
      let detail = $scope.items.find(o=>o.id==id);
      $('#editModal').modal()
      $scope.editItem = {
        id: detail.id,
        value: detail.value,
        name: detail.name
      }
     
    }

    $scope.edit = (id) => {
      let detail = $scope.items.find(o=>o.id==id);
      detail.value = $scope.editItem.value;
      detail.name = $scope.editItem.name;
      $('#editModal').modal('hide')
    }

    $scope.add = () => {
      let ids = $scope.items.map(o=>o.id);
      let maxId = Math.max(...ids) + 1;
      $scope.items.push({
        id: maxId,
        value: $scope.editItem.value,
        name: $scope.editItem.name
      })
      $('#editModal').modal('hide')
    }

    $scope.reset = ()=> {
      $scope.editItem = {
        id: null,
        value: '',
        name: ''
      }
    }
  }
]);
