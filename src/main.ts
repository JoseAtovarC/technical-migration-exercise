import { environment } from '../config/angular-environment/environment';

/** ANGULARJS DEPENDENCIES **/
import 'jquery';
import 'angular';
import 'angular-bind-html-compile';
import 'angular-cookies';
import 'angular-local-storage';
import 'angular-messages';
import 'angular-route';
import 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'jquery-placeholder';
import 'ui-select';

/** ANGULARJS MODULES **/
import './app-templates';
import './app-root-module';
import './app/ajs';

/** ANGULAR */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
