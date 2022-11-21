import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcMonths'
})
export class CalcMonthsPipe implements PipeTransform {

  transform(d1: string, d2:string): unknown {
    return this.calcMonths(d1, d2);
  }

  calcMonths(d1:string, d2:string){
    let dif = (Date.parse(d1.replace(/-/g, '\/')) - Date.parse(d2.replace(/-/g, '\/')))/1000;
    dif /= (60*60*24*7*4);
    return Math.abs(Math.round(dif));
  }

}
