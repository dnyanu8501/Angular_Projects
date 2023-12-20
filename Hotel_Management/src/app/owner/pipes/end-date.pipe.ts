import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'endDate'
})
export class EndDatePipe implements PipeTransform {

  transform(value: any): any {
    return  value.slice(0,10)
  }

}
