import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onSalse'
})
export class OnSalsePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    if(value) {
      return 'Đang hạ giá';
    }
    return '';
  }

}
