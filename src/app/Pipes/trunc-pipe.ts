import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trunc',
})
export class TruncPipe implements PipeTransform {
  transform(value: string,NumOfChar:number=50,End:string="..."): string {
    return value.slice(0,NumOfChar)+End;
  }
}
