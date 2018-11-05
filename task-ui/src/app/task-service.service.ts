import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  http: HttpClient;
  tasksUrl = 'http://localhost:8080/api/alltasks';
  taskUrl = 'http://localhost:8080/api/task/';

  //taskUrl = 'assets/MOCK_DATA.json';
  constructor(http: HttpClient ) {
    this.http = http;
  }

  getAllTasks(): Promise<any> {
    return this.http.get<Task>(this.tasksUrl).toPromise().then(value => value);
  }

  getTask(id: string): Promise<any> {
    return this.http.get(this.taskUrl + '' + id).toPromise().then(value => value);
  }

  updateTask(id: number, t: Task): Promise<any> {
    return this.http.put(this.taskUrl + '' + id, t).toPromise().then(value => value);
  }

  deleteTask(id: number, t: Task): Promise<any> {
    return this.http.delete(this.taskUrl + '' + id).toPromise().then(value => value);
  }

  addTask(t: Task): Promise<any> {
    return this.http.post(this.taskUrl, t).toPromise().then(value => value);
  }
}
