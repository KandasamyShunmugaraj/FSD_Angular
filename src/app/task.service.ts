import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private baseUrl = 'http://localhost:9090/task';

  constructor(private http: HttpClient) { }

  getTask(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/getTask/${id}`);
  }

  createTask(task: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, task);
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(`${this.baseUrl}/`+ task.taskId, task);
  }

  endTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/update/${id}`, { responseType: 'text' });
  }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/getAllTask`);
    
  }
 

}
