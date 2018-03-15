angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {

    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
        $http.get('/v1/fotos/' + $routeParams.fotoId)
            .success(function(foto) {
                $scope.foto = foto;
            })
            .error(function(erro) {
                $scope.mensagem = 'Não foi possível obter a foto';
            });
    }

    $scope.submeter = function() {
        console.log($scope.foto);

        if ($scope.foto._id) {
            $http.put('/v1/fotos/' + $scope.foto._id, $scope.foto)
                .success(function() {
                    $scope.mensagem = 'Foto ' + $scope.foto.titulo + ' alterada com sucesso.';
                })
                .error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Não foi possível atualizar a foto ' + $scope.foto.titulo;
                })
        }

        if ($scope.formulario.$valid) {
            $http.post('/v1/fotos', $scope.foto)
                .success(function() {
                    console.log('Foto adicionada com sucesso.');
                    $scope.foto = {};
                    $scope.mensagem = 'Foto cadastrada com sucesso.';
                })
                .error(function(erro) {
                    console.log('Não foi possível cadastrar a foto');
                    $scope.mensagem = 'Não foi possível cadastrar a foto.';
                })
        }
    };
});