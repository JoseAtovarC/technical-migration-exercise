import * as angular from 'angular';

export class MainPage {


    constructor () {}



}

const inject: string[] = [];
const selector: string = 'mainPage';
const options = {
    bindings: {},
    controller: MainPage,
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
}
