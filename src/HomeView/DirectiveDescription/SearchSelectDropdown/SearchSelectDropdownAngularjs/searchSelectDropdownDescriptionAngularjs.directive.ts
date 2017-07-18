
import SearchSelectDropdownDescriptionAngularjsController from './searchSelectDropdownDescriptionAngularjs.controller';

export default class SearchSelectDropdownDescriptionAngularjs {
    public template = require('./searchSelectDropdownDescriptionAngularjs.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = SearchSelectDropdownDescriptionAngularjsController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new SearchSelectDropdownDescriptionAngularjs();
            }]
    }    

}