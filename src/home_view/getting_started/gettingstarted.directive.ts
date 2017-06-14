
import GettingStartedController from './gettingstarted.controller';

export default class GettingStarted {
    public template = require('./gettingstarted.html');
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