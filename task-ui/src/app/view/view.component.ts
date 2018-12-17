import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskServiceService} from '../task-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-task-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  tasks: Task[];
  filterTask: Task;
  taskName: string;
  parentTaskName: string;
  priorityFromFilterId: number;
  priorityToFilterId: number;
  startDateFilter: Date;
  endDateFilter: Date;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskServiceService) {
    this.getTasks();
  }

  ngOnInit() {
    this.getTasks();
    this.filterTask = new Task();
  }

  getTasks(): void {
    this.taskService.getAllTasks().then(value => this.tasks = value);
  }
  update(t: Task ): void {
    this.router.navigate(['/update' , t.id]);
  }

  isTaskExpired(t: Task): boolean {
    return moment(t.endDate).isBefore(moment())
  }

  endTask(t: Task): void {
    t.endDate = new Date(moment.now());
    this.taskService.updateTask(t.id, t)
      .then(
        value => {
          this.getTasks();
        }
      );
  }

  delete(t: Task): void {
    this.taskService.deleteTask(t.id, t)
      .then(
        value => {
          this.getTasks();
        }
      );
  }
}
