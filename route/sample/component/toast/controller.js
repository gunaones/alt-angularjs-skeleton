define([
], function(){
    return [
        '$scope', '$routeParams', '$log', '$toast',
        function($scope, $routeParams, $log, $toast){
            $toast.add('Testing toast');
            $toast.add('Testing toast');
            $toast.add('Testing toast');
            $toast.add('Testing toast');
        }
    ];
});
