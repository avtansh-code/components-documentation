/// <reference path="../../typings/index.d.ts" />

import registerAppDirective from './appViewDirective';
export const AppName: string = 'home.view';
const angular = require('angular');
const uibootstrap = require('angular-ui-bootstrap');
const uiRouter = require('angular-ui-router');
const progressbutton = require('@eluci/progress-button');
const filevalidationlog = require('@eluci/filevalidationlogs');

const App = angular.module(AppName, ['ngMaterial','ngMdIcons', uibootstrap, uiRouter, progressbutton, filevalidationlog]);

angular
    .module(AppName)
    .config( ($stateProvider: any,
              $urlRouterProvider: any): void => {
            $stateProvider
            .state('main', {
                url: "/main",
                template: '<main-view />'
            })
             .state('main.introductionPage', {
                url: "/introduction",
                 template: '<introduction-page />'
            })
            .state('main.gettingStarted', {
                url: "/getting-started",
                template: '<getting-started />'
            })
            .state('main.progressbuttonDemo', {
                url: "/demo/progress-button",
                template: '<progress-button-demo />'
            })
            .state('main.filevalidationlogDemo', {
                url: "/demo/filevalidationlog",
                template: '<filevalidationlog-demo />'
            })
            .state('main.progressButton', {
                url: "/directive/progressButton",
                template: '<progress-button-directive />'
            })
            .state('main.fileTabs', {
                url: "/directive/fileTabs",
                template: '<file-tabs-directive />'
            }) 
            .state('main.searchSelectDropdownDemo', {
                url: "/demo/searchSelectDropdown",
                template: '<search-select-dropdown-demo />'
            })
            .state('main.searchSelectDropdown', {
                url: "/directive/searchSelectDropdown",
                template: '<search-select-dropdown-directive />'
            })  
            $urlRouterProvider.otherwise('/main/introduction');
    });

registerAppDirective(AppName);
