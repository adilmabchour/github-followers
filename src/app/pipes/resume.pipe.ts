import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    if(!value){
      return null;
    }
    return value.substr(0, (limit) ? limit : 30) + "...";
  }

}
