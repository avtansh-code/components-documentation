
import MainView from './MainView/MainView/mainView.directive';
import SideNavBar from './MainView/Sidenavbar/sidenavbar.directive';
import Toolbar from './MainView/Toolbar/toolbar.directive';
import ProgressButtonDemo from './Demo/ProgressButton/progressButtonDemo.directive';
import FilevalidationlogDemo from './Demo/FileValidationLog/fileValidationLogDemo.directive';
import IntroductionPage from './IntroductionPage/introductionPage.directive';
import GettingStarted from './GettingStarted/GettingStarted/gettingStarted.directive';
import GettingStartedAngular from './GettingStarted/GettingStartedAngular/gettingStartedAngular.directive';
import GettingStartedAngularjs from './GettingStarted/GettingStartedAngularjs/gettingStartedAngularjs.directive';
import ProgressButtonDescription from './DirectiveDescription/ProgressButton/ProgressButton/progressButtonDescription.directive';
import ProgressButtonDescriptionAngular from './DirectiveDescription/ProgressButton/ProgressButtonAngular/progressButtonDescriptionAngular.directive';
import ProgressButtonDescriptionAngularjs from './DirectiveDescription/ProgressButton/ProgressButtonAngularjs/progressButtonDescriptionAngularjs.directive';
import FilevalidationlogDescription from './DirectiveDescription/FileValidationLog/FileValidationLog/fileValidationLogDescription.directive';
import FilevalidationlogDescriptionAngular from './DirectiveDescription/FileValidationLog/FileValidationLogAngular/fileValidationLogDescriptionAngular.directive';
import FilevalidationlogDescriptionAngularjs from './DirectiveDescription/FileValidationLog/FileValidationLogAngularjs/fileValidationLogDescriptionAngularjs.directive';
import SearchSelectDropdownDemo from './Demo/SearchSelectDropdown/searchSelectDropdownDemo.directive';
import SearchSelectDropdownDescription from './DirectiveDescription/SearchSelectDropdown/SearchSelectDropdown/searchSelectDropdownDescription.directive';
import SearchSelectDropdownDescriptionAngularjs from './DirectiveDescription/SearchSelectDropdown/SearchSelectDropdownAngularjs/searchSelectDropdownDescriptionAngularjs.directive';
import SearchSelectDropdownDescriptionAngular from './DirectiveDescription/SearchSelectDropdown/SearchSelectDropdownAngular/searchSelectDropdownDescriptionAngular.directive';
import ComponentDocSection from './ComponentDocSection/componentDocSection.directive';
import ComponentAttributeTable from './ComponentAttributeTable/componentAttributeTable.directive';

export default function registerAppDirective(AppName: string): void {

    'use strict';

    angular
        .module(AppName)
        .directive('mainView', MainView.Factory())
        .directive('sidenavbar',SideNavBar.Factory())
        .directive('toolbar',Toolbar.Factory())
        .directive('progressButtonDemo',ProgressButtonDemo.Factory())
        .directive('introductionPage',IntroductionPage.Factory())
        .directive('gettingStarted',GettingStarted.Factory())
        .directive('gettingStartedAngularjs',GettingStartedAngularjs.Factory())
        .directive('gettingStartedAngular',GettingStartedAngular.Factory())
        .directive('filevalidationlogDemo',FilevalidationlogDemo.Factory())
        .directive('progressButtonDirective',ProgressButtonDescription.Factory())
        .directive('progressButtonDirectiveAngular',ProgressButtonDescriptionAngular.Factory())
        .directive('progressButtonDirectiveAngularjs',ProgressButtonDescriptionAngularjs.Factory())
        .directive('fileTabsDirective',FilevalidationlogDescription.Factory())
        .directive('fileTabsDirectiveAngular',FilevalidationlogDescriptionAngular.Factory())
        .directive('fileTabsDirectiveAngularjs',FilevalidationlogDescriptionAngularjs.Factory())
        .directive('searchSelectDropdownDemo',SearchSelectDropdownDemo.Factory())
        .directive('searchSelectDropdownDirective',SearchSelectDropdownDescription.Factory())
        .directive('searchSelectDropdownDirectiveAngularjs',SearchSelectDropdownDescriptionAngularjs.Factory())
        .directive('searchSelectDropdownDirectiveAngular',SearchSelectDropdownDescriptionAngular.Factory())
        .directive('componentDocSection', ComponentDocSection.Factory())
        .directive('componentAttributeTable', ComponentAttributeTable.Factory())

}