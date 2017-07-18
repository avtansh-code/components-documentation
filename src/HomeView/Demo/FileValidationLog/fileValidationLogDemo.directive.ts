
import FilevalidationlogDemoController from './fileValidationLogDemo.controller';

export default class FilevalidationlogDemo {
    public template = require('./fileValidationLogDemo.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = FilevalidationlogDemoController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new FilevalidationlogDemo();
            }]
    }    

}