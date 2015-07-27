define([
    'component/alt/progress/controller'
], function(){
    return [
        '$scope', '$routeParams', '$log',
        function($scope, $routeParams, $log){
            $scope.progress = {
                type: 'info',
                bars: [
                    {
                        type: 'info',
                        value: 30
                    }
                ]
            };
        }
    ];
});
