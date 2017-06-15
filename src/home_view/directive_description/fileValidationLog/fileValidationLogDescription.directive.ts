
import FilevalidationlogDescriptionController from './fileValidationLogDescription.controller';

export default class FilevalidationlogDescription {
    public template = require('./fileValidationLogDescription.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = FilevalidationlogDescriptionController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new FilevalidationlogDescription();
            }]
    }    

}