class InitRouter {

  constructor () {}
}
InitRouter.$inject = [];
angular.module('ib-plus-routing-module', [
  'ngRoute'
]);
angular.module('ib-plus-routing-module').run(InitRouter);
