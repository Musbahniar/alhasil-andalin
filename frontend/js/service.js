var App = angular.module('services', []);

App.factory('api', function($http, API){
	return {
		read: function(){
			return $http.get(API+'api/');
    },
    prodi: function(){
        return $http.get(API+'api/prodi/');
    },
    create: function(item){
      return $http.post(API+'api/', item);
		},
		profile: function(id){
			return $http.get(API+'api/'+id);	
		},
    cariMhs: function(nama){
      return $http.get(API+'api/find/'+nama);
    },
		update: function(item, id){
			return $http.put(API+'api/'+id, item);	
		},
		delete: function(id){
			return $http.delete(API+'api/'+id);
		}
	};
});

App.service('fileUpload', ['$http', function ($http) {
            this.uploadFileToUrl = function(file, uploadUrl){
               var fd = new FormData();
               fd.append('foto', file);
            
               $http.post(uploadUrl, fd, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){
               })
            
               .error(function(){
               });
            }
         }]);