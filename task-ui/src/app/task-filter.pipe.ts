import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {Task} from './task';
import * as moment from 'moment';

@Pipe({
  name: "TaskFilter"
})

@Injectable()
export class TaskFilter implements PipeTransform {

  transform(tasks: Task[], taskName: string, parentTaskName: string, priorityFromFilterId: number, priorityToFilterId: number, startDateFilter: Date, endDateFilter: Date): any {
    if (taskName) {
      tasks = tasks.filter(task => task.task.toLowerCase().includes(taskName.toLowerCase()));
    }

    if (parentTaskName) {
      tasks = tasks.filter(task => task.parentTask !== null && task.parentTask.task.toLowerCase().includes(parentTaskName.toLowerCase()));
    }

    if (priorityFromFilterId) {
      tasks = tasks.filter(task => task.priority >= priorityFromFilterId);
    }

    if (priorityToFilterId) {
      tasks = tasks.filter(task => task.priority <= priorityToFilterId);
    }

    if (startDateFilter) {
      tasks = tasks.filter(task => moment(task.startDate).isSameOrAfter(startDateFilter));
    }

    if (endDateFilter) {
      tasks = tasks.filter(task => moment(task.endDate).isSameOrBefore(endDateFilter));
    }
    return tasks;
  }
}
