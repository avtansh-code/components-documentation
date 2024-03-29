
/// <reference path="../typings/index.d.ts" />
export const AppName: string = 'app';

import {AppName as HomeCore} from './HomeCore/main';
import {AppName as HomeView} from './HomeView/main';

const angular = require('angular');

angular
    .module( AppName, [HomeCore, HomeView]);

declare const __TEST__: boolean;
if (!__TEST__) {
  angular.element(document).ready(
    () => angular.bootstrap(document, ['app'])
  );
}
