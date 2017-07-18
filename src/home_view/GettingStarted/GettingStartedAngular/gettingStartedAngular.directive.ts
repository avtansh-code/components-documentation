
import GettingStartedAngularController from './gettingStartedAngular.controller';

export default class GettingStartedAngular {
    public template = require('./gettingStartedAngular.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = GettingStartedAngularController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new GettingStartedAngular();
            }]
    }    

}