import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { SelectComponent } from 'src/app/components/select/select.component';
import { ApiServiceAngjs, PokeScope, Pokemon } from 'src/app/interface/poke-data';

const selector: string = 'formPoke';

const inject: string[] = ["$scope", "getPokemonInfo"];

const options: any = {

    controller: async function ($scope: PokeScope, getPokemonInfo: ApiServiceAngjs,) {
        $scope.name = ""
        $scope.selected = localStorage.getItem("selected")
        $scope.handleSubmit = async () => {

            if (localStorage.getItem("selected") === "" || localStorage.getItem("selected") === null) {
                $scope.selected = $scope.name
                localStorage.setItem("selected", $scope.name)
                await getPokemonInfo.getPokemon($scope.name).then((data: Pokemon) => {
                    console.log(data)
                    alert(`${data.name} id: ${data.id}`)
                })
            } else {

                $scope.selected = localStorage.getItem("selected")
                await getPokemonInfo.getPokemon($scope.selected).then((data: Pokemon) => {
                    console.log(data)
                    alert(`${data.name} id: ${data.id}`)
                })

                localStorage.removeItem("selected")
            }
        }

    },
    controllerAs: '$ctrl',
    template: `<form class=" p-4 d-flex justify-content-center "  ng-submit="handleSubmit()">
<div class="row">
<div class="col">
<input type="text" ng-model="name"  required class="form-control" placeholder="Nombre o ID"  />
</div>
<select-component class="col" [selected]="selected" ng-model="selected" ></select-component>
<div class="col">
<button type="submit" class="btn btn-primary">Buscar</button>
</div>
</div>
</form>`
}
options.controller.$inject = inject;

export const mod = angular.module('form.module', [])


mod.component(
    selector,
    options
);

mod.factory('getPokemonInfo', ["$http", function ($http: ng.IHttpService) {

    let pokeApiMoreData = "https://pokeapi.co/api/v2/pokemon/"
    return {
        getPokemon: async function (name: string) {
            return $http.get(pokeApiMoreData + name).then((response) => {
                return response.data;
            })
        }
    };
}])
angular.module('form.module')
    .directive('selectComponent',
        downgradeComponent({ component: SelectComponent }) as angular.IDirectiveFactory)