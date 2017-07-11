import {Component, OnInit} from '@angular/core';
import {CupsService} from './cups.service';
import {Cup} from './models/Cup';

@Component({
    templateUrl: './app/dashboard.html',
    providers: [CupsService]
})
export class DashboardComponent implements OnInit {
    savedCups: Cup[];
    errorMessage: Error;
    
    constructor(private cupsService: CupsService) {}
    
    ngOnInit() {
        this.errorMessage = new Error('A test error!');
        this.cupsService.getServerData('cups')
            .subscribe(
                data => this.savedCups = data.map(item => item.cup),
                error => this.errorMessage = error
            );
    }
    
    logComponent() {
        console.log(this);
    }
    
}