import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task,TaskService } from '../common';
import { AddTask } from '../addtask/addtask';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, AddTask],
  templateUrl: './tasklist.html',
  styleUrl: './tasklist.css'
})
// On component initialization, fetch the full task list
export class TaskList implements OnInit {
  tasks: Task[] = [];
  filter: 'all' | 'completed' | 'pending' = 'all';

// while class creating at that time will execute and injecting task service file to use the service methods
  constructor(private taskService: TaskService, private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.getTaskList();
  }
  
  // getter function, gets the full task list from taskservice 
  get filteredTasks(): Task[] {
    if (this.filter === 'completed') return this.tasks.filter(t => t.completed);
    if (this.filter === 'pending') return this.tasks.filter(t => !t.completed);
    return this.tasks;
  }

  deleteTask(id: number) {
  const confirmDelete = confirm('Are you sure you want to delete this task?');
  if (confirmDelete) {
    this.taskService.deleteTask(id).subscribe(() => {
      // this.tasks = this.tasks.filter(t => t.id !== id);
      this.getTaskList();
    });
  }
}

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task) {
    task.isEditing = false;
    this.taskService.updateTask(task).subscribe();
  }

  markComplete(task: Task) {
    const confirmcomplete = confirm('Are you sure you want to complete this task?');
    if (confirmcomplete) {
    task.completed = true;
    this.taskService.updateTask(task).subscribe(() => {
      this.getTaskList();
    });
  }
}


  logout() {
    const confirmlogout = confirm('Are you sure you want logout?');
     if (confirmlogout) {
    this.router.navigate(['']);
  }
  }

  refreshTaskList(event:any){
    this.getTaskList();
  }

  getTaskList(){
     this.taskService.getTasks().subscribe(data => this.tasks = data);
    setTimeout(() => {
       this.cdRef.detectChanges();
    }, 200);
  }

  get completedCount(): number {
  return this.tasks.filter(t => t.completed).length;
}

  get pendingCount(): number {
  return this.tasks.filter(t => !t.completed).length;
}


}