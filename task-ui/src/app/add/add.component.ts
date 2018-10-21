import {Component, OnInit, Output} from '@angular/core';
import {log} from 'util';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskServiceService} from '../task-service.service';
import {Task} from '../task';
import {ParentTask} from '../parentTask';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-task-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() tasks;
  task: Task;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskServiceService
  ) {
    this.task = new Task();
    this.task.priority = 1;
    this.task.title = 'asdas';
    this.task.parentTask = new ParentTask();
    this.task.parentTask.title = 'Ptitle';

  }
  ngOnInit() {

  }
  onSubmit() {
    this.taskService.addTask(this.task).then(
      value => {
        this.router.navigate(['./view']);
      }
        );
      }
}

