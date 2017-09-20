import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { childComponent } from './childComponent';
import { upperDirective } from './upper';
import { visibilityDirective } from './myvisibility';
import { mycolorDirective } from './mycolor';


@NgModule({
  declarations: [
    AppComponent,
    childComponent,
    upperDirective,
    visibilityDirective,
    mycolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
