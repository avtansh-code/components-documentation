
import registerAppService from './Services/registerAppService';
export const AppName: string = 'home.core';

angular.module(AppName, []);

registerAppService(AppName);
