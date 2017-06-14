/// <reference path="../../typings/index.d.ts" />

import registerAppDirective from './appViewDirective';
export const AppName: string = 'home.view';
const angular = require('angular');
const uibootstrap = require('angular-ui-bootstrap');
//const uiRouter = require('angular-ui-router');

const App = angular.module(AppName, ['ngMaterial', uibootstrap]);

// angular
//     .module(AppName)
//     .config( ($stateProvider: any,
//              $httpProvider: angular.IHttpService, $urlRouterProvider: any): void => {
//             $stateProvider
//             // .state('DrugHunter', {
//             //     url: "/DrugHunter",
//             //     template: '<main-view />'
//             // })
            
//             $urlRouterProvider.otherwise('/login');
//     });

registerAppDirective(AppName);
