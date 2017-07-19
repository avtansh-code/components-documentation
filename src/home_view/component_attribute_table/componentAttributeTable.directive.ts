
import ComponentAttributeTableController from './componentAttributeTable.controller';

export default class ComponentAttributeTable {
    public template = require('./componentAttributeTable.html');
    public scope ={
        attributes: '='
    };
    public bindToController =true;
    public controller = ComponentAttributeTableController;
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new ComponentAttributeTable();
            }]
    }    

}