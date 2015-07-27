alt.application = 'alt-angularjs-skeleton';
alt.version = '1.0.0';
alt.environment = 'development';
alt.urlArgs = alt.environment == 'production' ? '_v=' + alt.version : '_t=' + (+new Date());
alt.serverUrl = '';


// advanced configuration
alt.run(['$log', '$q', '$rootScope', '$route', '$window', function($log, $q, $rootScope, $route, $window){
    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        alt.menu = 'menu/public.html';
        $rootScope.menu = {submenu: ''};
    });
}]);