
import IntroductionPageController from './introductionpage.controller';

export default class IntroductionPage {
    public template = require('./introductionpage.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = IntroductionPageController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new IntroductionPage();
            }]
    }    

}