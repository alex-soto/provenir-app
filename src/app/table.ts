import {Component, OnInit} from '@angular/core';
import {CupsService} from './cups.service';
import {Cup} from './models/Cup';

@Component({
  templateUrl: './app/table.html',
  providers: [CupsService]
})

export class TableComponent implements OnInit {
    
    savedCups: Cup[];
    errorMessage: Error;
    
    constructor(private cupsService: CupsService){}
    
    ngOnInit() {
        this.cupsService.getServerData('cups')
            .subscribe(
                data => this.savedCups = data,
                error => this.errorMessage = error
            );
    }
}