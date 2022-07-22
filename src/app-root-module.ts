import * as angular from 'angular';

class InitApp {
  constructor() { }
  activate = (): void => { };
  $onInit = this.activate();
}
InitApp.$inject = [];

angular.module('app-root', [
  'LocalStorageModule',
  'app-templates',
  'ib-plus-routing-module',
  'main-module',
  "pokeName.module"
]);

angular.module('app-root').run(InitApp);

angular.module('app-root')
  .component('appRoot', {
    template: '<div ng-view></div>',
  })
