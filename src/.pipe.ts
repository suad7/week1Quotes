import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: ''
})
export class Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
