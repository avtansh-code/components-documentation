
import MainView from './main-view/mainview.directive';

export default function registerAppDirective(AppName: string): void {

    'use strict';

    angular
        .module(AppName)
        .directive('mainView', MainView.Factory())

}