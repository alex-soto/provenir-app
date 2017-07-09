import {Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Cup} from './models/Cup';

@Injectable()
export class CupsService {
    private apiUrl = "api/cups";

    constructor(private http: Http){}
    
    getCups(): Observable<Cup[]> {
    return this.http
        .get(this.apiUrl)
        .map(response => {
            let responseData = (response.json) ? response.json() : {};
            return responseData;
        })
        .catch(error => {
            if (error) {
                return Observable.throw(error);
            } else {
                return Observable.throw('An unknown error occurred!');
            }
        });
    }
    
    addNewCup(cup: Cup): Observable<Cup> {
        return this.http
            .post(this.apiUrl, { cup })
                .map(response => {
                    let responseData = (response.json) ? response.json() : {};
                    return responseData;
                })
                .catch(error => {
                    if (error) {
                        return Observable.throw(error);
                    } else {
                        return Observable.throw('An unknown error occurred!');
                    }
                });
    }
    // private cups: Cup[] = [];
    // private testCup = {name: "test", type: "test cup", displayText: "this is a test cup."};
    
    // constructor(){
    //     this.cups = JSON.parse(localStorage.getItem('cups'));
    //     // if (!this.cups){
    //     //     localStorage.setItem('cups', JSON.stringify(this.testCup));
    //     // }
    //     console.log(this.cups);
    // }
    
    // addNewCup(cup: Cup){
    //     this.cups.push(cup);
    //     localStorage.setItem('cups', JSON.stringify(this.cups));
    // }
}