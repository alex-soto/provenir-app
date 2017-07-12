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

        this.cupsService.getServerData('sizes')
        .subscribe(
                data => this.sizes = data,
                error => console.log(error)
            );
    }
    
    addNewCup(){
        if(this.cupsForm.invalid) {
            return;
        }
        let formModel = this.cupsForm.value;
        let newCupSize = this.selectedSize;
        let newCup = new Cup(
            formModel.name,
            formModel.type,
            newCupSize,
            formModel.displayText
        );
        console.log(newCup);
        if (!newCup) return; 
        this.cupsService.addNewCup(newCup)
            .subscribe(
                // cup  => this.heroes.push(hero),
                cup => {
                    console.log('new cup added: ', cup);
                    this.cupsService.getServerData('cups');
                    this.cupsForm.reset();
                },
                error =>  console.log(error)
            );
    }
    
    changeSize(size){
        // console.log(size);
        this.selectedSize = size;
        console.log(this.selectedSize);
        this.cupsForm.patchValue({
            size: size.displayName
        });
    }
    
    logComponent() {
        console.log(this.cupsForm.value);
    }
    
}