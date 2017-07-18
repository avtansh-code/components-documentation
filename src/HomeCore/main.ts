
import registerAppService from './services/registerAppService';
export const AppName: string = 'home.core';

angular.module(AppName, []);

registerAppService(AppName);
