import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyHuf'
})
export class CurrencyHufPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value=='-' ? "" : value + ",-");
  }

}
