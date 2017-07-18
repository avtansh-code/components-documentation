
import FileValidationLogDescriptionAngularjsController from './fileValidationLogDescriptionAngularjs.controller';

export default class FileValidationLogDescriptionAngularjs {
    public template = require('./fileValidationLogDescriptionAngularjs.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = FileValidationLogDescriptionAngularjsController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new FileValidationLogDescriptionAngularjs();
            }]
    }    

}