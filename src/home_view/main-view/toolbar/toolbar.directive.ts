
import ToolbarController from './toolbar.controller';

export default class Toolbar {
    public template = require('./toolbar.html');
    
    public scope ={
        
    };
    public bindToController =true;
    public controller = ToolbarController;
    
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new Toolbar();
            }]
    }    

}