import {ValueAddedService} from './ValueAddedService';

export class Cup {
    name: string;
    type: string;
    size: any;
    displayText: string;
    
    private vas?: ValueAddedService[]; // value added service
    
    constructor(
        name: string,
        type: string,
        size: any[],
        displayText?: string
    ){
        this.name = name;
        this.type = type;
        this.size = size;
        this.displayText = (displayText) ? displayText : '';
    }
    
    
    // addVas: add a value added service to this Cup
    addVas(valueAddedService: ValueAddedService){
        let index = Object.keys(this.vas).indexOf(valueAddedService.name);
        if ( index >= 0 ) {
            this.vas[index] = valueAddedService;
        } else {
            this.vas.push(valueAddedService);
        }
    }
    
    // removeVas: remove a value added service from this Cup
    removeVas(index: number) {
        this.vas = this.vas.slice(index, 1);
    }
}