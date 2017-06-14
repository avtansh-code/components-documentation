
import ProgressButtonDescriptionController from './progressbuttondescription.controller';

export default class ProgressButtonDescription {
    public template = require('./progressbuttondescription.html');
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