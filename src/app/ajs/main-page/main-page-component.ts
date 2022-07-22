import * as angular from 'angular';
import { downgradeInjectable } from '@angular/upgrade/static';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { downgradeComponent } from '@angular/upgrade/static';


const inject: string[] = ["PokemonsService", "$scope"];
const selector: string = 'mainPage';
const options = {
    bindings: {},
    controller: async function (PokemonsService: any, $scope: any) {
        $scope.pokenames = []
        await PokemonsService.getPokemons().then((p: any) => {

            return $scope.pokenames = p.results

        })
        console.log($scope.pokenames)

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
        .factory('PokemonsService', downgradeInjectable(PokemonsService) as any)
}
