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

/** TESTS */
import 'angular-mocks';


// Then we find all the tests.
const context = require.context('./app/', true, /-test\.ts$/);
// And load the modules.
context.keys().map(context);
