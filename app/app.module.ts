// This is the ROOT MODULE of our app

import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { NgModule }       from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent }  from './animal-list.component';


@NgModule({
  imports: [ BrowserModule,
             FormsModule ],
  declarations: [ AppComponent,  // declarations is an array of all components that will reside in this module.
                  AnimalListComponent ],
  bootstrap:    [ AppComponent ] // this is the root component and will be the first to show on the index page
})

export class AppModule { }
