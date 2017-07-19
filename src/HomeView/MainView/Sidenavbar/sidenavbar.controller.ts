
import Inject from "../../../utils/di";
import {STATES} from "../../constants";
export default class SideNavBarController {
  private style = require('./sidenavbar.css');

  constructor(@Inject('$state') private $state: any) {
    
  }

  
  /**
   * @param  {number} id
   * @returns void
   * changes state according to id
   */
  public changeState(id: number): void {
    this.$state.go(STATES[id]);
  }


}