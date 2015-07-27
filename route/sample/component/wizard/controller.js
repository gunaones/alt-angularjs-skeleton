define([
    'component/alt/wizard/controller'
], function(){
    return [
        '$scope', '$routeParams', '$log', '$q', '$timeout', '$validate', '$alert', '$window',
        function($scope, $routeParams, $log, $q, $timeout, $validate, $alert, $window){
            $scope.$validate = $validate;

            $scope.step1 = {
                title: 'Mulai',
                save: function(){
                    var deferred = $q.defer();
                    deferred.resolve();
                    return deferred.promise;
                }
            };

            $scope.step2 = {
                title: '1. Divisi',
                data: {},
                is_validated: function(){
                    var res = true,
                        msg = [];

                    if(!$validate.required($scope.step2.data.name)){
                        res = false;
                        msg.push("Isi nama divisi terlebih dahulu");
                    }

                    if(msg != '') $alert.add(msg.join("<br/>"), $alert.danger);
                    return res;
                },
                save: function(){
                    var deferred = $q.defer();
                    if($scope.step2.is_validated()){
                        $timeout(function(){
                            $scope.step2.data.id = 1;
                            deferred.resolve();
                        }, 1000);
                    }else{
                        deferred.reject();
                    }
                    return deferred.promise;
                }
            };

            $scope.step3 = {
                title: '2. Unit',
                data: {},
                open: function(){
                    var deferred = $q.defer();
                    $timeout(function(){
                        $scope.step3.data.code = '123';
                        deferred.resolve();
                    }, 1000);
                    return deferred.promise;
                },
                is_validated: function(){
                    var res = true,
                        msg = [];

                    if(!$validate.required($scope.step3.data.title)){
                        res = false;
                        msg.push("Isi judul unit terlebih dahulu");
                    }

                    if(msg != '') $alert.add(msg.join("<br/>"), $alert.danger);
                    return res;
                },
                save: function(){
                    var deferred = $q.defer();
                    if($scope.step3.is_validated()){
                        $timeout(function(){
                            $scope.step3.data.id = 2;
                            deferred.resolve();
                        }, 1000);
                    }else{
                        deferred.reject();
                    }
                    return deferred.promise;
                }
            };

            $scope.step4 = {
                title: 'Rekap',
                save: function(){
                    var deferred = $q.defer();
                    $timeout(function(){
                        $window.location.href = alt.baseUrl + 'tutorial/ui/wizard?divisiid=' + $scope.step2.data.id + '&unitid=' + $scope.step3.data.id;
                        deferred.resolve();
                    }, 1000);
                    return deferred.promise;
                }
            };
        }
    ];
});
