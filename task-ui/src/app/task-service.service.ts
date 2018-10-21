import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  http: HttpClient;
  tasksUrl = 'http://localhost:8080/api/tasks';
  taskUrl = 'http://localhost:8080/api/task/';

  //taskUrl = 'assets/MOCK_DATA.json';
  constructor(http: HttpClient ) {
    this.http = http;
  }

  getTasks(): Promise<any> {
    return this.http.get(this.tasksUrl).toPromise().then(value => value);
  }

  getTask(id: String): Promise<any> {
    return this.http.get(this.taskUrl + '' + id).toPromise().then(value => value);
  }

  updateTask(id: String, t: Task): Promise<any> {
    return this.http.put(this.taskUrl + '' + id, t).toPromise().then(value => value);
  }

  deleteTask(id: String, t: Task): Promise<any> {
    return this.http.delete(this.taskUrl + '' + id).toPromise().then(value => value);
  }

  addTask(t: Task): Promise<any> {
    return this.http.post(this.taskUrl, t).toPromise().then(value => value);
  }
}
