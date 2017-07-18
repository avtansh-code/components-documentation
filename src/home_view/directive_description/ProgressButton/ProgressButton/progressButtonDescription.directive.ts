
import ProgressButtonDescriptionController from './progressButtonDescription.controller';

export default class ProgressButtonDescription {
    public template = require('./progressButtonDescription.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = ProgressButtonDescriptionController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ProgressButtonDescription();
            }]
    }    

}