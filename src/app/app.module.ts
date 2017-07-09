import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';

import {CupsData} from './cups-data.ts';
import {CupsService} from './cups.service';
import {routing, RootComponent} from './routes';
import {FormComponent} from './form';
import {TableComponent} from './table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(CupsData),
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
