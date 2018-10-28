import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskServiceService} from '../task-service.service';
import {Task} from '../task';
import {ParentTask} from "../parentTask";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-task-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() tasks;
  task: Task;
  parents: ParentTask[];
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
    this.taskService.addTask(this.task).then(
      value => {
        this.router.navigate(['./view']);
      }
    );
  }

  private loadParents() {
    this.parents = [];
    this.parents.push({'parentId': null, parentTask: ''});
    this.parentTaskService.findAll().subscribe(
      (res: HttpResponse<ParentTask[]>) => {
        res.body.forEach(parent => this.parents.push(parent));
      },
      (res: HttpErrorResponse) => this.parents = []
    );
  }
}

