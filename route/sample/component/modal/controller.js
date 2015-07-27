define([
    'component/alt/button/controller',
    'component/alt/modal/controller'
], function(){
    return [
        '$scope', '$routeParams', '$log', '$timeout', '$button',
        function($scope, $routeParams, $log, $timeout, $button){
            // will be filled from modal component
            $scope.modal = {
                open: null,
                close: null,
                header: "Header",
                body: "Body",
                buttons: [
                    $button('save'),
                    $button('close')
                ]
            };
            $scope.modal.buttons[0].onclick = function(){
                $log.debug($scope);
                alert('a');
            };
            $scope.modal.buttons[1].onclick = function(){
                $scope.modal.close();
            };
        }
    ];
});
