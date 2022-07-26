import * as angular from 'angular';
import { downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { ApiService, PokeData, PokeScope } from 'src/app/interface/poke-data';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { CardComponent } from 'src/app/components/card/card.component';
import { forkJoin, Observable } from 'rxjs';


const inject: string[] = [" PokemonsService ", "$scope"];
const selector: string = 'mainPage';
const options = {
    bindings: {},
    controller: async function (PokemonsServices: ApiService, $scope: PokeScope) {
        $scope.pokenames = []
        PokemonsServices.getPokemons().subscribe((pokemons: PokeData[]) => {
            $scope.pokenames = pokemons
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
        .factory(' PokemonsService ', downgradeInjectable(PokemonsService) as angular.IDirectiveFactory)
}
