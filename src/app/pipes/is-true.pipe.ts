import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isTrue'
})
export class IsTruePipe implements PipeTransform {

  transform(value: any): boolean {
    return Boolean(value);
  }

}
