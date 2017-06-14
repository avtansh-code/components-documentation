
import ProgressButtonDemoController from './progressButtonDemo.controller';

export default class ProgressButtonDemo {
    public template = require('./progressButtonDemo.html');
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