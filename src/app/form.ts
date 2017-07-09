import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cup} from './models/Cup';
import {CupsService} from './cups.service';

@Component({
  templateUrl: './app/form.html',
  providers: [CupsService]
})

export class FormComponent implements OnInit {
    cupsForm: FormGroup
    testCup: Cup = new Cup('test', 'test cup', 'this is a test cup.');
    submitEnabled: boolean = false;
    
    constructor(private cupsService: CupsService, private formBuilder: FormBuilder) {
        
        this.cupsForm = formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            displayText: ''
        });
        
        this.cupsForm.valueChanges.subscribe(data => {
            if (this.cupsForm.valid){
                this.submitEnabled = true;
            } else {
                this.submitEnabled = false;
            }
        });
    }
    
    ngOnInit() {
        console.log(this.cupsService);
    }
    
    addNewCup(){
        console.log(this.cupsForm);
        let cup;
        if (!cup) { return; }
        this.cupsService.addNewCup(cup)
            .subscribe(
                // cup  => this.heroes.push(hero),
                cup => console.log('new cup added: ', cup),
                error =>  console.log(error)
            );
    }
    
    logForm() {
        console.log(this.cupsForm);
    }
    
    get diagnostic() { 
        let cupsFormObj = {};
        Object.keys(this.cupsForm.controls).forEach((item) => {
            cupsFormObj[item] = this.cupsForm.controls[item].value;
        });
        return JSON.stringify(cupsFormObj);
    }
    
}

// class Cup {
//     private name: String;
//     private type: String;
//     private displayText: String;
    
//     constructor(name, type, displayText) {
//         this.name = name;
//         this.type = type;
//         this.displayText = displayText;
//     }
// }