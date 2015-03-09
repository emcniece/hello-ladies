angular.module('hw.services', [])

/*=========================================
=            Spark API Service            =
=========================================*/
.service('chartService', function($localStorage, $http, $q, $ionicLoading){
  return {
    fetch: fetch
  };

  function fetch(path, account, params, template){

    delete $http.defaults.headers.common['Authorization'];
    if( typeof(account) !== 'undefined' && (account) ){
      var userEncoded = Base64.encode(account.email+':'+account.pass);
      $http.defaults.headers.common['Authorization'] = 'Basic ' + userEncoded;
    }

    if( typeof(template) !== 'undefined'){
      template += " <i class='icon ion-loading-c'></i> ";
      $ionicLoading.show({ template: template + ""});
    }

    console.log( 'SparkAPI Send: ', path, params);

    var request = $http({
      method: 'GET',
      params: params,
      url: $localStorage.settings.sparkApiUrl + path
    });

    return( request.then(handleSuccess, handleError));

  } // fetch

  function handleSuccess(response, status){
    $ionicLoading.hide();
    console.log('SparkAPI success: ', response);
    return response.data;
  }

  function handleError(response){
    console.log('SparkAPI error: ', response);
    $ionicLoading.hide();
    if (! angular.isObject( response.data ) || !response.statusText) {
      return( $q.reject( "An unknown error occurred." ) );
    }

    // Otherwise, use expected error message.
    return( $q.reject( response.data.error_description || response.statusText ) );
  }


})


;