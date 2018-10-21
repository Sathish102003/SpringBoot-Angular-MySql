import {Component, OnInit} from '@angular/core';
import {Task} from '../task';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  tasks: Task[];
  filterTask: Task;
  min: number =0;
  max: number =5;

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
    this.taskService.getTasks().then(value => this.tasks = value);
  }
  update(t: Task ): void {
    this.router.navigate(['/update' , t.id]);
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
