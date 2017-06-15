
import MainViewController from './mainView.controller';

export default class MainView {
    public template = require('./mainView.html');
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