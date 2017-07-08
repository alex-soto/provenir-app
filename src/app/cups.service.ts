// import { Injectable } from '@angular/core';
import {Cup} from './models/Cup';

// @Injectable()
export class CupsService {
    private cups: Cup[] = [];
    private testCup = {name: "test", type: "test cup", displayText: "this is a test cup."};
    
    constructor(){
        this.cups = JSON.parse(localStorage.getItem('cups'));
        // if (!this.cups){
        //     localStorage.setItem('cups', JSON.stringify(this.testCup));
        // }
        console.log(this.cups);
    }
    
    addNewCup(cup: Cup){
        this.cups.push(cup);
        localStorage.setItem('cups', JSON.stringify(this.cups));
    }
}