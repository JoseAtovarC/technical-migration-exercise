import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';
import { SelectComponent } from 'src/app/components/select/select.component';

const selector: string = 'formPoke';

const inject: string[] = ["$scope", "getPokemonInfo"];

const options: any = {

    controller: async function ($scope: any, getPokemonInfo: any,) {
        $scope.name = ""
        $scope.selected = ""
        $scope.handleSubmit = async () => {
            await getPokemonInfo.getPokemon($scope.name).then((data: any) => {
                console.log(data)
            })
        }
        $scope.addPoke = (poke: string) => {
            console.log(poke)
        }
    },


    controllerAs: '$ctrl',
    template: `<form  ng-submit="handleSubmit()">
<div class="row">
<div class="col">
<input type="text" ng-model="name"  required class="form-control" placeholder="Nombre o ID"  />

</div>
<select-component class="col"></select-component>

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

mod.factory('getPokemonInfo', ["$http", function ($http: any) {

    let pokeApiMoreData = "https://pokeapi.co/api/v2/pokemon/"
    return {
        getPokemon: async function (name: string) {
            return await $http.get(pokeApiMoreData + name).then((response: any) => {
                return response.data;
            })
        }
    };
}])
angular.module('form.module')
    .directive('selectComponent',
        downgradeComponent({ component: SelectComponent }) as angular.IDirectiveFactory)