
import MainView from './main-view/mainView/mainView.directive';
import SideNavBar from './main-view/sidenavbar/sidenavbar.directive';
import Toolbar from './main-view/toolbar/toolbar.directive';
import ProgressButtonDemo from './demo/progressButton/progressButtonDemo.directive';
import FilevalidationlogDemo from './demo/fileValidationLog/fileValidationLogDemo.directive';
import IntroductionPage from './introduction_page/introductionPage.directive';
import GettingStarted from './getting_started/gettingStarted.directive';
import ProgressButtonDescription from './directive_description/progressButton/progressButtonDescription.directive';
import FilevalidationlogDescription from './directive_description/fileValidationLog/fileValidationLogDescription.directive';
import SearchSelectDropdown from './demo/searchSelectDropdown/searchSelectDropdownDemo.directive';

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
        .directive('filevalidationlogDemo',FilevalidationlogDemo.Factory())
        .directive('progressButtonDirective',ProgressButtonDescription.Factory())
        .directive('fileTabsDirective',FilevalidationlogDescription.Factory())
        .directive('searchSelectDropdownDemo',SearchSelectDropdown.Factory())

}