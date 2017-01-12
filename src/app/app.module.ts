import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ProgressiveTariffService } from './progressivetariff.service';
import { ProcessorService } from './processor.service';
import { CalculatorComponent } from './calculator/calculator.component';
import { TariffsettingsComponent } from './tariffsettings/tariffsettings.component';
import { UahPipe } from './uah.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    TariffsettingsComponent,
    UahPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [ProgressiveTariffService, ProcessorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
