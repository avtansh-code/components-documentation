
import GettingStartedController from './gettingStarted.controller';

export default class GettingStarted {
    public template = require('./gettingStarted.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = GettingStartedController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new GettingStarted();
            }]
    }    

}