
import ProgressButtonDemoController from './progressbuttondemo.controller';

export default class ProgressButtonDemo {
    public template = require('./progressbuttondemo.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = ProgressButtonDemoController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ProgressButtonDemo();
            }]
    }    

}