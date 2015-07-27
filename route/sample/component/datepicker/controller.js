define([
    'component/alt/toolbar/controller',
    'component/alt/datepicker/controller'
], function(){
    return [
        '$scope', '$routeParams', '$log',
        function($scope, $routeParams, $log){
            $scope.model = {
                date: ""
            };
        }
    ];
});
