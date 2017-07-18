
import GettingStartedAngularjsController from './gettingStartedAngularjs.controller';

export default class GettingStartedAngularjs {
    public template = require('./gettingStartedAngularjs.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = GettingStartedAngularjsController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new GettingStartedAngularjs();
            }]
    }    

}