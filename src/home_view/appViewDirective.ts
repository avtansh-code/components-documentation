
import MainView from './main-view/mainView/mainView.directive';
import SideNavBar from './main-view/sidenavbar/sidenavbar.directive';
import Toolbar from './main-view/toolbar/toolbar.directive';
import ProgressButtonDemo from './demo/progressButton/progressButtonDemo.directive';
import FilevalidationlogDemo from './demo/fileValidationLog/fileValidationLogDemo.directive';
import IntroductionPage from './introduction_page/introductionPage.directive';
import GettingStarted from './getting_started/getting_started/gettingStarted.directive';
import GettingStartedAngular from './getting_started/getting_started_angular/gettingStartedAngular.directive';
import GettingStartedAngularjs from './getting_started/getting_started_angularjs/gettingStartedAngularjs.directive';
import ProgressButtonDescription from './directive_description/progressButton/progressButtonDescription.directive';
import FilevalidationlogDescription from './directive_description/fileValidationLog/fileValidationLogDescription.directive';
import SearchSelectDropdownDemo from './demo/searchSelectDropdown/searchSelectDropdownDemo.directive';
import SearchSelectDropdownDescription from './directive_description/searchSelectDropdown/searchSelectDropdownDescription.directive';
import ComponentDocSection from './component_doc_section/componentDocSection.directive';
import ComponentAttributeTable from './component_attribute_table/componentAttributeTable.directive';

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
        .directive('fileTabsDirective',FilevalidationlogDescription.Factory())
        .directive('searchSelectDropdownDemo',SearchSelectDropdownDemo.Factory())
        .directive('searchSelectDropdownDirective',SearchSelectDropdownDescription.Factory())
        .directive('componentDocSection', ComponentDocSection.Factory())
        .directive('componentAttributeTable', ComponentAttributeTable.Factory())

}