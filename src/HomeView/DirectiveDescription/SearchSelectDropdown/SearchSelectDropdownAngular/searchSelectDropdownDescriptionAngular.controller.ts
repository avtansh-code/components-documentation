
import {IfcAttribute} from '../../../../dataType';

export default class SearchSelectDropdownDescriptionAngularController {
    
  private style = require('./searchSelectDropdownDescriptionAngular.css');
  private attribute: IfcAttribute[] =[
    {
      parameter: 'heading',
      type: 'string',
      description: `Placeholder text for dropdown heading.`
    },
    {
      parameter: 'accordion-data',
      type: 'object[]',
      description: `model to define the child accordion data. It is an array of json objects 
                    containing each accordion data.
                    `
    },
    {
      parameter: 'open',
      type: 'boolean',
      description: `model to control open/close action of dropdown.`
    },
    {
      parameter: 'open-one-at-a-time',
      type: 'boolean',
      description: `control whether expanding one child accordion will cause other child accordions to close`
    },
    {
      parameter: 'is-disabled',
      type: 'boolean',
      description: `determines whether to disable the dropdown or not
                    `
    },
    {
      parameter: 'heading-color',
      type: 'string',
      description: `text and background color for heading of dropdown. It should be defined in hex format`
    },
    {
      parameter: 'icon-color',
      type: 'string',
      description: `specifies search icon color
                    `
    },
    {
      parameter: 'no-of-item',
      type: 'number',
      description: `control number of rows displayed in child accordions`
    }
  ];

  constructor() {
    
  }

  

}