angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams, recursoFoto) {

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {

        recursoFoto.get({ fotoId: $routeParams.fotoId }, function(foto) {
            $scope.foto = foto;
        }, function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível obter a foto';
        });

        // $http.get('v1/fotos/' + $routeParams.fotoId)
        //     .success(function(foto) {
        //         $scope.foto = foto;
        //     })
        //     .error(function(erro) {
        //         $scope.mensagem = 'Não foi possível obter a foto';
        //     });
    }

    $scope.submeter = function() {
        // console.log($scope.foto);

        if ($scope.formulario.$valid) {

            if ($routeParams.fotoId) {

                recursoFoto.update({ fotoId: $scope.foto._id }, $scope.foto, function() {
                    $scope.mensagem = 'Foto alterada com sucesso.';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Nâo foi possível alterar.';
                })


                // $http.put('v1/fotos/' + $scope.foto._id, $scope.foto)
                //     .success(function() {
                //         $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso.';
                //     })
                //     .error(function(erro) {
                //         console.log(erro);
                //         $scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
                //     });
            } else {

                recursoFoto.save($scope.foto, function() {
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso.';
                }, function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível cadastrar a foto.';
                })


                // $http.post('v1/fotos', $scope.foto)
                //     .success(function() {

                //         $scope.foto = {};
                //         $scope.mensagem = 'Foto cadastrada com sucesso.';
                //         $scope.formulario.$setPristine();
                //     })
                //     .error(function(erro) {
                //         console.log('Não foi possível cadastrar a foto');
                //         $scope.mensagem = 'Não foi possível cadastrar a foto.';
                //     });
            }

        }
    };
});