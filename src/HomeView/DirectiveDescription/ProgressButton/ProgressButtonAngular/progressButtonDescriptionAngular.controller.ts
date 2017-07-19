
import {IfcAttribute} from '../../../../dataType';

export default class ProgressButtonDescriptionAngularController {
    
  private style = require('./progressButtonDescriptionAngular.css');
  private attribute: IfcAttribute[] =[
    {
      parameter: 'state',
      type: 'Json object',
      description: `model to define state of the button with text to be displayed and its 
                    background color.It contains key/value pairs.It contains following keys -
                      <ul >
                          <li>value  </li>
                          <li>text  &nbsp &nbsp &nbsp<code>optional</code></li>
                          <li>color  &nbsp &nbsp<code>optional</code></li>
                      </ul>
                    `
    },
    {
      parameter: 'disabledstate',
      type: 'boolean',
      description: `Determines whether or not to disable the progress-button`
    },
    {
      parameter: 'icon',
      type: 'string',
      description: `String name of icon for initial state. icons should be from 
                      <a href="https://material.io/icons/">
                      material icons library</a> only
                    `
    }
  ];
  constructor() {
    
  }


  

}