
export interface IfcAccordionData {
    heading: string;
    selected: boolean;
    open: boolean;
    isDisabled: boolean;
    color: string;
    data: IfcAccordionContent[];
}

export interface IfcAccordionContent {
    content: string;
    selected: boolean;
}
