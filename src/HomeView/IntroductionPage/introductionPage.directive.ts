
import IntroductionPageController from './introductionPage.controller';

export default class IntroductionPage {
    public template = require('./introductionPage.html');
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