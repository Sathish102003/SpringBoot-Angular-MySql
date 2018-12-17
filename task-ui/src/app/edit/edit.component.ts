import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskServiceService} from '../task-service.service';
import * as moment from 'moment';
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-task-update',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  task: Task;
  parents = [];
  parentId: number;
  errorMsg: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskServiceService
  ) {
  }

  ngOnInit() {
    this.taskService.getTask(this.route.snapshot.paramMap.get('id')).then(value => {
      this.task = value;
    });
  }

  onSubmit() {
    if (this.isTaskContainsError()) {
      return false;
    }

    this.taskService.updateTask(this.task.id, this.task)
      .then(
        value => {
          this.router.navigate(['./view']);
        }
      );
  }

  cancel() {
    this.errorMsg = '';
    this.router.navigate(['./view']);
  }


  private isTaskContainsError() {
    let endDate = new Date(this.task.endDate);
    let startDate = new Date(this.task.startDate);
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

  private formatDate(date: any) {
    return moment(date).format('DD-MM-YYYY');
  }


}
