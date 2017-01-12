import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uah'
})
export class UahPipe implements PipeTransform {

  transform(coins: number): string {
    let cur = Math.floor(coins / 100);
    return cur + ' грн. ' + (coins - cur * 100) + ' коп.';
  }

}
