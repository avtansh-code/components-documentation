
import FilevalidationlogDescriptionController from './filevalidationlogdescription.controller';

export default class FilevalidationlogDescription {
    public template = require('./filevalidationlogdescription.html');
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