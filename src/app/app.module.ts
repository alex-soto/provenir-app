import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';
import {FormComponent} from './form';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    FormComponent
    
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
