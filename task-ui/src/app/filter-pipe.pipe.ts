import { Pipe, PipeTransform } from '@angular/core';
import {Task} from "./task";
import {log} from "util";


@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {
  // https://long2know.com/2016/11/angular2-filter-pipes/
  transform(values: Task[],
            filterTask: Task,
            min: number,
            max: number
  ): any {

    if(!Array.isArray(values)){
      return values;
    } else {
      let vals = values;
      if(filterTask.title){
        vals = vals.filter(
          v => {
            if(filterTask.title && v.title === filterTask.title ){
              return true;
            } else {
              return false;
            }
          }
        );
      }
      if(filterTask.parentTask && filterTask.parentTask.title) {
        vals = vals.filter(
          v => {
            if (filterTask.parentTask.title && v.parentTask.title === filterTask.parentTask.title) {
              return true;
            } else {
              return false;
            }
          }
        );
      }

      if(min >= 0) {
        vals = vals.filter(
          v => {
            if (v.priority >= min ) {
              return true;
            } else {
              return false;
            }
          }
        );
      }

      if(max <= 5) {
        vals = vals.filter(
          v => {
            if (v.priority <= max ) {
              return true;
            } else {
              return false;
            }
          }
        );
      }
      log(vals);
      return vals;
    }


  }

}
