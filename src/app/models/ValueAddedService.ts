export class ValueAddedService {
    name: string;
    description: string;
    icon: string;
    
    constructor(name: string, description: string, icon: string){
        this.name = name;
        this.description = description;
        this.icon = icon;
    }
}