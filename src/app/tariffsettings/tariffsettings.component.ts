import { Component, OnInit } from '@angular/core';

import {ProcessorService} from './../processor.service';
import {ProgressiveTariffService} from './../progressivetariff.service'

@Component({
  selector: 'app-tariffsettings',
  templateUrl: './tariffsettings.component.html',
  styleUrls: ['./tariffsettings.component.scss']
})
export class TariffsettingsComponent implements OnInit {

  constructor(public processor: ProcessorService) { }
  public resetTariff()
  {
    this.processor.tariff = new ProgressiveTariffService();
  }

  ngOnInit(): void {
  }

}
