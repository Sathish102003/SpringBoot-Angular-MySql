import {ParentTask} from './parentTask';

export class Task {
  id: String;
  title: String;
  priority: number;
  startDate: Date;
  endDate: Date;
  summary: String;
  parentTask: ParentTask;
}
