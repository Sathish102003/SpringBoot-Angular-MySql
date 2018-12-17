import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskServiceService} from '../task-service.service';
import {Task} from '../task';
import {ParentTask} from "../parentTask";
import * as moment from 'moment';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-task-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() tasks;
  task: Task;
  parents = [];
  parent: Task;
  errorMsg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskServiceService
  ) {
    this.task = new Task();
    this.task.priority = 1;
  }

  ngOnInit() {
    this.loadParents();
  }

  onSubmit() {
    if (this.isTaskContainsError()) {
      return false;
    }

    if (this.parent != null) {
      this.task.parentTask = new ParentTask(this.parent);
    }
    this.taskService.addTask(this.task).then(
      value => {
        this.router.navigate(['./view']);
      }
    );
  }

  private loadParents() {
    this.taskService.getAllTasks().then(value => this.parents = value);
  }

  private isTaskContainsError() {
    let startDate = new Date(this.task.startDate);
    let endDate = new Date(this.task.endDate);
    if (isNullOrUndefined(this.task.task) || this.task.task.length < 1) {
      this.errorMsg = `Task name is mandatory`;
      return true;
    }
    if (isNullOrUndefined(this.task.startDate)) {
      this.errorMsg = `Start Date is mandatory`;
      return true;
    }

    if (!isNullOrUndefined(this.task.endDate) && startDate > endDate) {
      this.errorMsg = `Start date : ${this.formatDate(startDate)} should not be greater than end date : ${this.formatDate(endDate)}`;
      return true;
    }
    return false;
  }

  reset() {
    this.errorMsg = '';
    this.task = new Task();
    this.task.priority = 1;
    this.parent = null;
  }

  private formatDate(date: any) {
    return moment(date).format('DD-MM-YYYY');
  }

}

