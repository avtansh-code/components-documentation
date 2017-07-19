
import ProgressButtonDemoAngularjsController from './progressButtonDemoAngularjs.controller';

export default class ProgressButtonDemoAngularjs {
    public template = require('./progressButtonDemoAngularjs.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = ProgressButtonDemoAngularjsController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ProgressButtonDemoAngularjs();
            }]
    }    

}