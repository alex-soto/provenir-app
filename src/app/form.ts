import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Cups} from './models/cups';

@Component({
  templateUrl: './app/form.html'
})

export class FormComponent {
    model: any[];
    // Cups = {
    //     name: '', type: '', displayText: ''
    // };
    
    
    cupsForm = new FormGroup({
        name: new FormControl(),
        type: new FormControl(),
        displayText: new FormControl()
    });
    
    addNewCup(){
        console.log(this.cupsForm);
    }
    
    get diagnostic() { return JSON.stringify(this.model); }
}