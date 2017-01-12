import { Component } from '@angular/core';
import {ProcessorService} from './processor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private processor: ProcessorService)
  {
  }
}
