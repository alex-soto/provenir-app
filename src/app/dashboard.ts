import {Component, OnInit} from '@angular/core';
import {CupsService} from './cups.service';

@Component({
    templateUrl: './app/dashboard.html',
    providers: [CupsService]
})
export class DashboardComponent implements OnInit {
    constructor(private cupsService: CupsService) {}
    
    ngOnInit() {
        console.log(this.cupsService);
    }
}