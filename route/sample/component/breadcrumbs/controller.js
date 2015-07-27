define([
    'component/alt/breadcrumbs/controller'
], function(){
    return [
        '$scope', '$routeParams', '$log',
        function($scope, $routeParams, $log){
            $scope.breadcrumbs = [
                {
                    'title': 'Home',
                    'class': '',
                    'href': alt.baseUrl
                },
                {
                    'title': 'Public',
                    'class': '',
                    'href': alt.baseUrl + 'public'
                },
                {
                    'title': 'Index',
                    'class': 'active',
                    'href': alt.baseUrl + 'public/index'
                }
            ];
        }
    ];
});
