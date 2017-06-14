
import Inject from "../../../utils/di"
export default class SideNavBarController {
  private style = require('./sidenavbar.css');
  private states = [
    'main.introductionPage',
    'main.gettingStarted',
    'main.progressbuttonDemo',
    'main.filevalidationlogDemo',
    'main.progressButton',
    'main.fileTabs'
  ];

  constructor(@Inject('$state') private $state: any) {
    
  }

  
  /**
   * @param  {number} id
   * @returns void
   * changes state according to id
   */
  public changeState(id: number): void {
    this.$state.go(this.states[id]);
  }


}