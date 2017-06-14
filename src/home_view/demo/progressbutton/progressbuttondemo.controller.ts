

export default class ProgressButtonDemoController {
    
  private style = require('./progressbuttondemo.css');
  private icons: string[] = ['publish','check_circle','error','file_upload'];
  private isDisabled = false;
  private state: number = 0;
  private iconNo: number = 0;
  private initialStateObject = {
    'value':'initial',
    'text':'Upload',
    'color':'#337ab7'
  };
  private progressStateObject = {
    'value':'inprogress',
    'text':'Uploading',
    'color':'#a9a9a9'
  };
  private doneStateObject = {
    'value':'done',
    'text':'done',
    'color':'#5cb85c'
  };
  private errorStateObject = {
    'value':'error',
    'text':'error',
    'color':'#d9534f'
  };
  private stateObject  = [
    this.initialStateObject,
    this.doneStateObject,
    this.errorStateObject,
    this.progressStateObject
  ];
  constructor() {
    
  }

  private toProgressState(): void {
      this.state = 3;
  }

  

}