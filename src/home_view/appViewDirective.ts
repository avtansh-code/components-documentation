
import MainView from './main-view/mainView/mainview.directive';
import SideNavBar from './main-view/sidenavbar/sidenavbar.directive';
import Toolbar from './main-view/toolbar/toolbar.directive';

export default function registerAppDirective(AppName: string): void {

    'use strict';

    angular
        .module(AppName)
        .directive('mainView', MainView.Factory())
        .directive('sidenavbar',SideNavBar.Factory())
        .directive('toolbar',Toolbar.Factory())

}