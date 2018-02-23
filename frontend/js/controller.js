var App = angular.module('controllers', ['angular-growl']);

/*creating Directive to Upload file starts*/


App.controller('ReadCtrl', function($scope, api, $route){
	$scope.api = [];
	api.read().then(function(data){
		$scope.api = data.data;
		if(data.data.length === 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});

	$scope.hapusMhs = function(id){
        if (confirm("Data Mahasiswa akan di hapus?")) {
            api.delete(id).then(function(data){
			console.log(data);
			$route.reload();
		});	     
        }      
	};

	$scope.cariNama = function(nama){
	$scope.api = [];
	api.cariMhs(nama).then(function(data){
		$scope.api = data.data;
		if(data.data.length === 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});
};
});	

App.controller('CreateCtrl', function($scope, api, $location, growl) {
	$scope.loading = false;
	$scope.item = {};
	$scope.api = [];
	
	api.prodi().then(function(data){
		$scope.api = data.data;
		if(data.data.length === 0){
			$scope.notFound = true;
		}
	},function(data){
		console.log("data", data);
	});


	$scope.tambah = function(item){
		$scope.loading = true;
		var data = {
			cNIM 			: item.nim,
			cNamaMahasiswa 	: item.nama,
			cIdProdi 		: item.prodi,
			cAlamat			: item.alamat,
			cJenisKelamin	: item.jk,
			cAgama			: item.agama,
			cEmail			: item.email,
			cHP				: item.hp
            };
		
		if ($scope.item['nim'] !== undefined && $scope.item['nama'] !== undefined && $scope.item['prodi'] !== undefined ) {
			
			api.create(data).then(function(data){
				$location.path('/');
            	$scope.success = true;
			});

		} else {
			growl.addErrorMessage("Ops, NIM, Nama Mahasiwa dan Pilihan Prodi harus terisi ",{ttl: 2000});
            $scope.loading = false;
		}
	};
});


App.controller('EditCtrl', function($scope, api, $routeParams, $location){
	var id = $routeParams.id;
	$scope.api = [];
	
		api.prodi().then(function(data){
			$scope.api = data.data;
			if(data.data.length === 0){
				$scope.notFound = true;
			}
		},function(data){
			console.log("data", data);
		});

	api.profile(id).then(function(data){
		$scope.item = data.data;
        if(data.data.cJenisKelamin === 'Laki-laki'){
			$scope.laki = true;
		}else{
            $scope.perempuan = true;
        }
        $scope.pilihProdi = $scope.api[1];
	});

	$scope.edit = function(item){
		var data = {
			cNIM 			: item.cNIM,
			cNamaMahasiswa 	: item.cNamaMahasiswa,
			cIdProdi 		: item.cIdProdi,
			cAlamat			: item.cAlamat,
			cJenisKelamin	: item.cJenisKelamin,
			cAgama			: item.cAgama,
			cEmail			: item.cEmail,
			cHP				: item.cHP
            };
		console.log(item);
		var id = item.cId; 
		
		api.update(data, id).then(function(data){
			$location.path('/');
		});
	};
});	



