
import ComponentDocSectionController from './componentDocSection.controller';

export default class ComponentDocSection {
    public template = require('./componentDocSection.html');
    public scope ={
        title: '@'
    };
    public transclude = true;
    public bindToController =true;
    public controller = ComponentDocSectionController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ComponentDocSection();
            }]
    }    

}