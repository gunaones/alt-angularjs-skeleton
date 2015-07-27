define([
], function(){
    return [
        '$scope', '$routeParams', '$log', '$alert',
        function($scope, $routeParams, $log, $alert){
            $alert.add('Testing alert', $alert.success);
            $alert.add('Testing alert', $alert.warning);
            $alert.add('Testing alert', $alert.danger);
            $alert.add('Testing alert', $alert.info);
        }
    ];
});
