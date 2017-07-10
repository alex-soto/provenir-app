import {Component, OnInit} from '@angular/core';
import {CupsService} from './cups.service';
import {Cup} from './models/Cup';

@Component({
    templateUrl: './app/dashboard.html',
    providers: [CupsService]
})
export class DashboardComponent implements OnInit {
    savedCups: Cup[];
    
    constructor(private cupsService: CupsService) {}
    
    ngOnInit() {
        console.log(this.cupsService);
    }
}