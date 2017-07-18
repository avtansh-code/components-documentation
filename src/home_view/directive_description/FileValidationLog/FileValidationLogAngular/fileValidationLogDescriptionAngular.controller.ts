
import {IfcAttribute} from '../../../../dataType';

export default class FilevalidationlogDescriptionAngularController {
    
  private style = require('./fileValidationLogDescriptionAngular.css');
  private attribute: IfcAttribute[] =[
    {
      parameter: 'data',
      type: 'object',
      description: `model for file validation logs.`
    },
    {
      parameter: 'listcolors',
      type: 'object',
      description: `color corresponding to each list in the given data.The keys will be the 
                    same as the names of the arrays in each object of the json data and the 
                    colors need to be input in the hex/string format. Default value is black 
                    for all the accordions.For example, it can be specified as<br>
                    listColors = <code>{errors:"#EA4436",warnings:"#C27600"}</code>
                    `
    },
    {
      parameter: 'labelsize',
      type: 'number',
      description: `the font size of the accordion label.It is defined like 20px.It will take 
                    values just like the font-size attribute of css. Default value is <code>25px</code>`
    },
    {
      parameter: 'textsize',
      type: 'number',
      description: `font size of the body of each accordion.It is defined like 20px.It will 
                    take values just like the font-size attribute of css. Default value is <code>15px</code>`
    },
    {
      parameter: 'download-icon',
      type: 'string',
      description: `Determines whether or not to show download-icon.Default is block.
                    Options: – <code>block</code>, <code>none</code>. 
                    `
    },
    {
      parameter: 'page-size',
      type: 'number',
      description: `defines the number of items per page when applying pagination.Default is 
                    20`
    },
    {
      parameter: 'title',
      type: 'string',
      description: `specifies title to be displayed at top. If not defined, doesn't display any title`
    }
  ];
  constructor() {
    
  }

  

}