
import ProgressButtonDescriptionAngularjsController from './progressButtonDescriptionAngularjs.controller';

export default class ProgressButtonDescriptionAngularjs {
    public template = require('./progressButtonDescriptionAngularjs.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = ProgressButtonDescriptionAngularjsController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ProgressButtonDescriptionAngularjs();
            }]
    }    

}