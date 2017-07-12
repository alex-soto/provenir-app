import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Cup} from './models/Cup';

@Injectable()
export class CupsService {
    private cupsUrl = "api/cups";
    private sizesUrl = "api/sizes";
    private vasUrl = "api/vas";

    constructor(private http: Http){}
    
    getServerData(apiTarget): Observable<any[]> {
        
        let apiUrl;
        if (apiTarget === 'cups') {
            apiUrl = this.cupsUrl;
        } else if (apiTarget === 'sizes') {
            apiUrl = this.sizesUrl;
        } else if (apiTarget === 'vas') {
            apiUrl = this.vasUrl;
        }
        
        return this.http
        .get(apiUrl)
        .map(response => {
            let responseData = (response.json) ? response.json().data : {};
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
            .post(this.cupsUrl, { cup })
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
}