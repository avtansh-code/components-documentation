
import FilevalidationlogDemoController from './filevalidationlogdemo.controller';

export default class FilevalidationlogDemo {
    public template = require('./filevalidationlogdemo.html');
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