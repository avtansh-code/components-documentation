
import ProgressButtonDemoAngularController from './progressButtonDemoAngular.controller';

export default class ProgressButtonDemoAngular {
    public template = require('./progressButtonDemoAngular.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = ProgressButtonDemoAngularController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ProgressButtonDemoAngular();
            }]
    }    

}