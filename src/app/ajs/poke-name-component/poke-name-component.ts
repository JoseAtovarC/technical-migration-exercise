import * as angular from 'angular';
import { UpgradeComponent } from '@angular/upgrade/static';
import { Directive, ElementRef, Injector, Input } from '@angular/core';

angular.module('pokeName.module', [])
    .component('pokeName', {
        bindings: {
            pokName: '='
        },

        template: `<div >
    <p>{{$ctrl.pokName}}</p>
    </div>`,
        controller: function () {

        }
    })

@Directive({
    selector: 'poke-name',
})

export class pokeNameComponentWrapper extends UpgradeComponent {

    @Input() pokName: string = "";

    constructor(elementRef: ElementRef, injector: Injector) {
        // We must pass the name of the directive as used by AngularJS to the super
        super('pokeName', elementRef, injector);
    }
}