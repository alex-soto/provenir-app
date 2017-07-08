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
    cupForm: FormGroup = new FormGroup(
        name: FormControl = new FormControl(),
        type: FormControl = new FormControl(),
        displayText: FormControl = new FormControl()
    );
    
    addNewCup(){
        console.log(this.cupForm);
    }
    
    get diagnostic() { return JSON.stringify(this.model); }
}