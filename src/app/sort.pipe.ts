import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(cars:any,keresendo:any): any {
    if (!cars) return null;
    if (!keresendo) return cars
    cars=cars.filter(
      (e:any)=>JSON.stringify(e).toLowerCase().includes(keresendo.toLowerCase())
    )
    return cars
  }

}
