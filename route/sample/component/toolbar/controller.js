define([
    'component/alt/toolbar/controller',
    'component/alt/button/controller'
], function(){
    return [
        '$scope', '$routeParams', '$log', '$button',
        function($scope, $routeParams, $log, $button){
            $scope.excel = $button('excel');
            $scope.excel.onclick = function(){
                alert('excel');
            };

            $scope.reset = $button('reset');
            $scope.reset.onclick = function(){
                alert('reset');
            };
        }
    ];
});
