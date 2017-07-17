
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

export interface IfcAttribute {
    parameter: string;
    type: string;
    description: string;
}
