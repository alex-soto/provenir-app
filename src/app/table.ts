import {Component} from '@angular/core';
import {CupsService} from './cups.service';
import {Cup} from './models/Cup';

@Component({
  templateUrl: './app/table.html',
  providers: [CupsService]
})

export class TableComponent {
    
    cupsService: CupsService;
    savedCups: Cup[];
    
    constructor(cupsService: CupsService){
        console.log(cupsService);
    }
    
}