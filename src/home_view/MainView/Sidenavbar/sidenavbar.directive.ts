
import SideNavBarController from './sidenavbar.controller';

export default class SideNavBar {
    public template = require('./sidenavbar.html');
    
    public scope ={
        
    };
    public bindToController =true;
    public controller = SideNavBarController;
    
    public controllerAs = 'vm';
    public static Factory() {
        return [
            () => {
                return new SideNavBar();
            }]
    }    

}