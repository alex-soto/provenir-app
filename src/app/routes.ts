import {Component} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormComponent} from './form';
import {TableComponent} from './table';
import {DashboardComponent} from './dashboard';

@Component({
  selector: 'my-app',
  templateUrl: './app/main.html',
})
export class RootComponent {}

export const routes: Routes = [
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'form',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);
