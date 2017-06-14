
import MainViewController from './mainview.controller';

export default class MainView {
    public template = require('./mainview.html');
    public controller = MainViewController;
    public bindToController = true;
    public controllerAs = 'vm';

    public static Factory() {
        return [
            () => {
                return new MainView();
            }]
    }    

}