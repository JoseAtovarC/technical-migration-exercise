class RouterConfig {

    constructor (private $routeProvider: any) {

    }
    active = (): void => {
        this.$routeProvider
            .when('/main', {
                template: '<main-page></main-page>',
            })
            .otherwise({
                redirectTo: '/main'
            });

    };
    $onInit = this.active();
}
RouterConfig.$inject = ['$routeProvider'];

angular.module('ib-plus-routing-module').config(RouterConfig);
