import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'drinkCategoryName'
})
export class DrinkCategoryNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    return null;
  }

}
