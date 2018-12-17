import {Task} from "./task";

export class ParentTask {
  id: number;
  task: String;

  constructor(task: Task) {
    this.task = task.task;
    this.id = task.id;
  }
}
