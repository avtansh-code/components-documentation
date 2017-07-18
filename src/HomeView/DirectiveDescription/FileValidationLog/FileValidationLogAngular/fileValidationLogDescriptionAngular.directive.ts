
import FileValidationLogDescriptionAngularController from './fileValidationLogDescriptionAngular.controller';

export default class FileValidationLogDescriptionAngular {
    public template = require('./fileValidationLogDescriptionAngular.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = FileValidationLogDescriptionAngularController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new FileValidationLogDescriptionAngular();
            }]
    }    

}