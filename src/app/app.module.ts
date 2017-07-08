import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {CupsService} from './cups.service';
import {routing, RootComponent} from './routes';
import {FormComponent} from './form';
import {TableComponent} from './table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    RootComponent,
    FormComponent,
    TableComponent
  ],
  providers: [
    CupsService
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
