angular.module('alurapic').controller('FotosController', function($scope, $http, recursoFoto) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';


    recursoFoto.query(function(fotos) {
        $scope.fotos = fotos;
    }, function(erro) {
        console.log(erro);
    });

    // $http.get('v1/fotos')
    //     .success(function(retorno) {
    //         // console.log(retorno);
    //         $scope.fotos = retorno;
    //     })
    //     .error(function(erro) {
    //         console.log(erro);
    //     });

    $scope.remover = function(foto) {
        // console.log(foto);

        recursoFoto.delete({ fotoId: foto._id }, function() {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso.';
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        })


        // $http.delete('v1/fotos/' + foto._id)
        //     .success(function() {
        //         var indiceDaFoto = $scope.fotos.indexOf(foto);
        //         $scope.fotos.splice(indiceDaFoto, 1);
        //         $scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso.';
        //     })
        //     .error(function(erro) {
        //         $scope.mensagem = 'Não foi possível apagar a foto ' + foto.titulo;
        //     });

    };


    // $scope.fotos = [{
    //         url: "http://www.fundosanimais.com/Minis/leoes.jpg",
    //         titulo: "Leão 1"
    //     },
    //     {
    //         url: "http://www.fundosanimais.com/Minis/leoes.jpg",
    //         titulo: "Leão 2"
    //     },
    //     {
    //         url: "http://www.fundosanimais.com/Minis/leoes.jpg",
    //         titulo: "Leão 3"
    //     }
    // ];
});