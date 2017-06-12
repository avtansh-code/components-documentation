
export const AppName: string = 'home';

import {AppName as HomeCore} from './home_core/main';
import {AppName as HomeView} from './home_view/main';

const angular = require('angular');

angular
    .module( AppName, [HomeCore, HomeView]);
