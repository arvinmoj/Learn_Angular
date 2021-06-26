import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { DisplayErrorMessageComponent } from './display-error-message/display-error-message.component';


@NgModule({
  declarations: [

    AppComponent,
     CurrencyConverterComponent,
     DisplayErrorMessageComponent,

  ],
  imports: [

    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
