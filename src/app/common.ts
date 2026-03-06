import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// Make this service available throughout the app
export interface Task {
  id: number;
  heading: string;
  details: string;
  completed: boolean;
  createdAt?: string;
  isEditing?: boolean;
  showActions?: boolean;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasklist';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task: Partial<Task>): Observable<string> {
    return this.http.post(this.apiUrl, task, { responseType: 'text' });
  }

  updateTask(task: Task): Observable<string> {
    return this.http.put(this.apiUrl, task, { responseType: 'text' });
  }

  deleteTask(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // giving task as input
  markComplete(task: Task): Observable<string> {
    return this.http.put(this.apiUrl, task, { responseType: 'text' });
  }
}
