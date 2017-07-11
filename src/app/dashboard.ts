import {Component, OnInit, AfterViewChecked, ViewEncapsulation} from '@angular/core';
import {CupsService} from './cups.service';
import {Cup} from './models/Cup';
import {ValueAddedService} from './models/ValueAddedService';

declare var componentHandler;

@Component({
    templateUrl: './app/dashboard.html',
    providers: [CupsService],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, AfterViewChecked {
    savedCups: Cup[];
    vas: ValueAddedService[];
    errorMessage: Error;
    
    constructor(private cupsService: CupsService) {}
    
    ngOnInit() {
        this.errorMessage = new Error('A test error!');
        this.cupsService.getServerData('cups')
            .subscribe(
                data => this.savedCups = data.map(item => item.cup),
                error => this.errorMessage = error
            );
            
        this.cupsService.getServerData('vas')
            .subscribe(
                    data => this.vas = data,
                    error => this.errorMessage = error
                );
    }
    
    ngAfterViewChecked() {
        componentHandler.upgradeDom();
    }
    
    logCupData(cup: Cup) {
        console.log(cup);
    }
    
}