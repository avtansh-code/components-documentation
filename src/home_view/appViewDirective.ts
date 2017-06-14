
import MainView from './main-view/mainView/mainview.directive';
import SideNavBar from './main-view/sidenavbar/sidenavbar.directive';
import Toolbar from './main-view/toolbar/toolbar.directive';
import ProgressButtonDemo from './demo/progressbutton/progressbuttondemo.directive';
import FilevalidationlogDemo from './demo/filevalidationlog/filevalidationlogdemo.directive';
import IntroductionPage from './introduction_page/introductionpage.directive';
import GettingStarted from './getting_started/gettingstarted.directive';
import ProgressButtonDescription from './directive_description/progressbutton/progressbuttondescription.directive';
import FilevalidationlogDescription from './directive_description/filevalidationlog/filevalidationlogdescription.directive';

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

}