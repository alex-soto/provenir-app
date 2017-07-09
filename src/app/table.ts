import {Component, OnInit} from '@angular/core';
import {CupsService} from './cups.service';
import {Cup} from './models/Cup';

@Component({
  templateUrl: './app/table.html',
  providers: [CupsService]
})

export class TableComponent implements OnInit {
    
    // cupsService: CupsService;
    savedCups: Cup[];
    errorMessage: Error;
    
    constructor(private cupsService: CupsService){}
    
    ngOnInit() {
        console.log(this.cupsService);
    }
    
    getCups() {
        this.cupsService.getCups()
            .subscribe(
            cups => this.savedCups = cups,
            error =>  this.errorMessage = error)
    }
    
}