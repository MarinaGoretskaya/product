import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { ProdComponent } from './components/prod/prod.component';*/
import { PopupComponent } from './components/popup/popup.component';
import { PopupService } from './popup.service';
import { AgGridModule } from 'ag-grid-angular';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    AppComponent,
    /*ProdComponent,*/
    PopupComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    [AgGridModule.withComponents(null)]
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent]
})
export class AppModule { }
