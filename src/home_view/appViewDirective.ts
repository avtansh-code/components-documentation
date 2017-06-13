
import MainView from './main-view/mainview.directive';
import SideNavBar from './main-view/sidenavbar/sidenavbar.directive'

export default function registerAppDirective(AppName: string): void {

    'use strict';

    angular
        .module(AppName)
        .directive('mainView', MainView.Factory())
        .directive('sidenavbar',SideNavBar.Factory())

}