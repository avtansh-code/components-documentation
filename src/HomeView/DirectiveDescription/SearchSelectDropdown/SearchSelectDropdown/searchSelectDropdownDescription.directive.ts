
import SearchSelectDropdownDescriptionController from './searchSelectDropdownDescription.controller';

export default class SearchSelectDropdownDescription {
    public template = require('./searchSelectDropdownDescription.html');
    public scope ={
        
    };
    public bindToController =true;
    public controller = SearchSelectDropdownDescriptionController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new SearchSelectDropdownDescription();
            }]
    }    

}