import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaComponent } from './cha/cha.component';
import { ConCComponent } from './conc/conc.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaComponent,
    ConCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
