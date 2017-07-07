import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form';

@Component({
  selector: 'my-app',
  templateUrl: './app/main.html'
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: '',
    component: FormComponent
  }
];

export const routing = RouterModule.forRoot(routes);
