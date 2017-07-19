
import * as CONSTANTS from '../../../constants';
export default class ProgressButtonDemoAngularjsController {

  private style = require('./progressButtonDemoAngularjs.css');
  private icons: string[] = ['publish','check_circle','error','file_upload'];
  private isDisabled = true;
  private state: number = 0;
  private iconNo: number = 0;
  
  private stateObject  = [
    CONSTANTS.INITIAL_STATE_OBJECT,
    CONSTANTS.DONE_STATE_OBJECT,
    CONSTANTS.ERROR_STATE_OBJECT,
    CONSTANTS.PROGRESS_STATE_OBJECT
  ];
  constructor() {
    
  }
  /**
   * @returns void
   * changes button state to inprogress
   */
  private toProgressState(): void {
      this.state = 3;
  }

  

}