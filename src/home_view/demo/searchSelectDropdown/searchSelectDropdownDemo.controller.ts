
import * as CONSTANTS from '../../constants';
import { IfcAccordionData, IfcAccordionContent } from '../../../dataType';

export default class SearchSelectDropdownDemoController {
  private style = require('./searchSelectDropdownDemo.css');
  private heading: string;
  private open: boolean;
  private accordionData: IfcAccordionData[];
  private isDisabled: boolean;
  private openOneAtATime: boolean;
  private headingColor: string;
  private dataFirstAccordion: IfcAccordionContent[] = [];
  private dataSecondAccordion: IfcAccordionContent[] = [];
  private dataThirdAccordion: IfcAccordionContent[] = [];
  constructor() {
    for (let pointNo = 0; pointNo < 1000; pointNo++) {
      let content: string = 'point ' + pointNo;
      let tempFirstData = {
        content: content,
        selected: false
      }
      let tempSecondData = {
        content: content,
        selected: false
      }
      let tempThirdData = {
        content: content,
        selected: false
      }
      this.dataFirstAccordion.push(tempFirstData);
      this.dataSecondAccordion.push(tempSecondData);
      this.dataThirdAccordion.push(tempThirdData);
    }
    this.heading = 'Main Accordion';
    this.open = true;
    this.isDisabled = false;
    this.openOneAtATime = false;
    this.headingColor = 'red';
    this.accordionData = [
      {
        heading: 'Accordion 1',
        selected: false,
        open: true,
        isDisabled: false,
        color: '#00f',
        data: this.dataFirstAccordion
      },
      {
        heading: 'Accordion 2',
        selected: false,
        open: true,
        isDisabled: false,
        color: '#00f',
        data: this.dataSecondAccordion
      },
      {
        heading: 'Accordion 3',
        selected: false,
        open: true,
        isDisabled: false,
        color: '#00f',
        data: this.dataThirdAccordion
      }
    ];
  }



}