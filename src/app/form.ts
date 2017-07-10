import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cup} from './models/Cup';
import {Size} from './models/Size';
import {CupsService} from './cups.service';

@Component({
  templateUrl: './app/form.html',
  providers: [CupsService]
})

export class FormComponent implements OnInit {
    sizes: Size[];
    cupsForm: FormGroup
    submitEnabled: boolean = false;
    selectedSize: Size;
    
    constructor(private cupsService: CupsService, private formBuilder: FormBuilder) {
        
        this.cupsForm = formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            size: ['', Validators.required],
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
        // console.log(this.cupsService);
        this.cupsService.getServerData('sizes')
        .subscribe(
                data => this.sizes = data,
                error => console.log(error)
            );
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
    
    changeSize(size){
        // console.log(size);
        this.selectedSize = size;
        this.cupsForm.patchValue({
            size: size.displayName
        });
    }
    
    logForm() {
        console.log(this);
    }
    
}