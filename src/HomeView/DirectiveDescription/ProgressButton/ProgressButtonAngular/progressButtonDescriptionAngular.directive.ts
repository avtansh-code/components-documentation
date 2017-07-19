
import ProgressButtonDescriptionAngularController from './progressButtonDescriptionAngular.controller';

export default class ProgressButtonDescriptionAngular {
    public template = require('./progressButtonDescriptionAngular.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = ProgressButtonDescriptionAngularController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ProgressButtonDescriptionAngular();
            }]
    }    

}