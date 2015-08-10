app.factory('user', function($resource){
  
  // ngResource call to the API for the users
  var User = $resource('api/users');
    
  // Query the users and return the results
  function getUsers() {
    return User.query().$promise.then(function(results) {
      return results;
    }, function(error) {
      console.log(error);
    });
  }

  return {
    getUsers: getUsers
  }
  
});
