import {Component, AfterViewChecked, ElementRef, OnInit, Renderer, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Cup} from './models/Cup';
import {Size} from './models/Size';
import {ValueAddedService} from './models/ValueAddedService';
import {CupsService} from './cups.service';

declare var componentHandler;

@Component({
  templateUrl: './app/form.html',
  providers: [CupsService],
  encapsulation: ViewEncapsulation.None
})

export class FormComponent implements OnInit, AfterViewChecked {
    sizes: Size[];
    valueAddedServices: ValueAddedService[];
    cupsForm: FormGroup;
    submitEnabled: boolean = false;
    selectedSize: Size;
    @ViewChild('mdlSelectContainer') selectContainer: ElementRef;
    
    constructor(private cupsService: CupsService, 
                private formBuilder: FormBuilder,
                private renderer: Renderer) {
        
        this.cupsForm = formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            size: ['', Validators.required],
            vas: formBuilder.array([]),
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
    
    get vas(): FormArray {
        return this.cupsForm.get('vas') as FormArray;
    }
    
    resetNestedFormControls() {
        let vasFormGroups = this.valueAddedServices.map(vas => {
            return this.formBuilder.control(false);
        });
        let vasFormArray = this.formBuilder.array(vasFormGroups);
        this.cupsForm.setControl('vas', vasFormArray);
    }
    
    ngOnInit() {
        this.cupsService.getServerData('sizes')
        .subscribe(
                data => this.sizes = data,
                error => console.log(error)
            );
            
        this.cupsService.getServerData('vas')
        .subscribe(
                data => {
                    this.valueAddedServices = data.map(item => item.vas);
                    this.resetNestedFormControls();
                },
                error => console.log(error)
            );
    }
    
    ngAfterViewChecked() {
        componentHandler.upgradeDom();
    }
    
    addNewCup(){
        if(this.cupsForm.invalid) {
            return;
        }
        let formModel = this.cupsForm.value;
        let selectedVas = [];
        formModel.vas.forEach((item, index) => {
            if (item) selectedVas.push(this.valueAddedServices[index]);
        });
        let newCupSize = this.selectedSize;
        let newCup = new Cup(
            formModel.name,
            formModel.type,
            newCupSize,
            formModel.displayText,
            selectedVas
        );
        if (!newCup) return; 
        this.cupsService.addNewCup(newCup)
            .subscribe(
                cup => {
                    console.log('new cup added: ', cup);
                    this.cupsService.getServerData('cups');
                    this.cupsForm.reset();
                    this.resetNestedFormControls();
                    
                },
                error =>  console.log(error)
            );
    }
    
    changeSize(size){
        this.selectedSize = size;
        // renderer.setElementClass is used here to fix an issue with getmdl-select 
        this.renderer.setElementClass(this.selectContainer.nativeElement.lastElementChild, 'is-visible', false);
        this.cupsForm.patchValue({
            size: size.displayName
        });
    }
    
    calculateVasColWidth() {
        let maxCols = 12;
        let minColSize = 1;
        return (this.valueAddedServices.length > maxCols) ? minColSize : Math.floor(12 / this.valueAddedServices.length);
    }
    
    logComponent() {
        console.log(this);
    }
    
}