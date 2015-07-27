define([
    'component/ng/table.min'
], function(){
    return [
        '$scope', '$routeParams', '$log', 'ngTableParams',
        function($scope, $routeParams, $log, ngTableParams){
            var tabledata = [
                {tanggal:'03-12-2014', judul:'Tes1', status:'0', MD5hash:'aaaaa'},
                {tanggal:'03-12-2014', judul:'Tes2', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes3', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes4', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes5', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes6', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes7', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes8', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes9', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes10', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes11', status:'1', MD5hash:'bbbbb'},
                {tanggal:'03-12-2014', judul:'Tes12', status:'1', MD5hash:'bbbbb'}
            ];

            $scope.obj_table   = new ngTableParams({
                page    : 1,
                count   : 10
            }, {
                total: tabledata.length,
                getData: function($defer, params){
                    $defer.resolve(tabledata.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                }
            });

            $scope.test = function(index){
                alert(index);
            };
        }
    ];
});
