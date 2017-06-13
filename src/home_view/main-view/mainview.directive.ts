
import MainViewController from './mainview.controller';

export default class MainView {
    public template = require('./mainview.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = MainViewController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new MainView();
            }]
    }    

}