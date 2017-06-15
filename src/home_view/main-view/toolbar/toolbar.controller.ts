
import Inject from "../../../utils/di";
import {STATES, TOOLBAR_STATES} from '../../constants';

export default class ToolbarController {
  private style = require('./toolbar.css');
  
  constructor(@Inject('$state') private $state: any) {
    
  }

  private get toolbarHeading(): string[] {
    let heading: string[] = [''];
    for(let state in STATES){
      if(this.$state.current.name == STATES[state]){
        return TOOLBAR_STATES[state];
      }
    }
    return heading;
  }


  

}