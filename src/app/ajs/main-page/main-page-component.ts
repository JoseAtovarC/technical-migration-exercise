import * as angular from 'angular';
import { downgradeInjectable } from '@angular/upgrade/static';
import { ApiService } from 'src/app/interface/poke-data';
import { CardComponent } from 'src/app/components/card/card.component';
import { downgradeComponent } from '@angular/upgrade/static';
import { pokeData } from 'src/app/interface/poke-data';
import { PokeScope } from 'src/app/interface/poke-data';


const inject: string[] = [" ApiService ", "$scope"];
const selector: string = 'mainPage';
const options = {
    bindings: {},
    controller: async function (ApiService: ApiService, $scope: PokeScope) {
        $scope.pokenames = []
        await ApiService.getPokemons().then((p: pokeData) => {
            console.log(p)
            return $scope.pokenames = p

        })


    },
    controllerAs: '$ctrl',
    templateUrl: 'main-page-component.html'
};

try {
    const mod = angular.module('main-module');
    options.controller.$inject = inject;
    mod.component(
        selector,
        options
    );
} catch (error) {
    const mod = angular.module('main-module', []);
    options.controller.$inject = inject;
    mod.component(
        selector,
        options
    );
    angular.module('main-module')
        .directive('cardComponent',
            downgradeComponent({ component: CardComponent }) as angular.IDirectiveFactory)
    angular.module('main-module')
        .factory(' ApiService ', downgradeInjectable(ApiService) as angular.IDirectiveFactory)
}
