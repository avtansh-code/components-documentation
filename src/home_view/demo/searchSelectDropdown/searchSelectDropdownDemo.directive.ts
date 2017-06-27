
import SearchSelectDropdownDemoController from './searchSelectDropdownDemo.controller';

export default class SearchSelectDropdownDemo {
    public template = require('./searchSelectDropdownDemo.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = SearchSelectDropdownDemoController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new SearchSelectDropdownDemo();
            }]
    }    

}