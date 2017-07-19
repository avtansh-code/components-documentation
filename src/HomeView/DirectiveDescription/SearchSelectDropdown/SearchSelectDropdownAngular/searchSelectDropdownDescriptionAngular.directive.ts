
import SearchSelectDropdownDescriptionAngularController from './searchSelectDropdownDescriptionAngular.controller';

export default class SearchSelectDropdownDescriptionAngular {
    public template = require('./searchSelectDropdownDescriptionAngular.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = SearchSelectDropdownDescriptionAngularController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new SearchSelectDropdownDescriptionAngular();
            }]
    }    

}