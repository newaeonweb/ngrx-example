import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any, property: string): any[] {
    if (items && items.length) {
      if (property === 'abv') {
        return items.filter(
          (item: any) => parseFloat(item.abv) >= parseFloat(item.ibu)
        );
      } else if (property === 'ibu') {
        return items.filter(
          (item: any) => parseFloat(item.ibu) >= parseFloat(item.abv)
        );
      } else {
        return items;
      }
    }
  }
}
