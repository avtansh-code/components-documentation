import 'babel-polyfill';
import 'es5-shim';
import 'es6-shim';
import 'es6-promise';
import 'ts-helper';
import 'isomorphic-fetch';

// import 'lodash';
import $ from 'jquery';
import jQuery from 'jquery';
window.$ = window.jQuery = $;

import 'bootstrap';


const angular = require('angular');


import {AppName} from './home_page/main'

angular.module('app', [AppName])

declare const __TEST__: boolean;
if (!__TEST__) {
  angular.element(document).ready(
    () => angular.bootstrap(document, ['app'])
  );
}
