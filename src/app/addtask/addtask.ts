import { Component, Output,EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../common';
import { log } from 'console';


@Component({
  selector: 'app-addtask',
  standalone:true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addtask.html',
  styleUrl: './addtask.css'
})
export class AddTask {
  // variable created as empty string
  newHeading = '';
  newDetails = '';
  // while class creating at that time will execute and injecting task service file to use the service methods
  constructor(private taskService: TaskService) {}

  @Output() refreshTaskList = new EventEmitter<string>();

  addTask() {
    if (this.newHeading.trim() && this.newDetails.trim()) {
      const newTask = {
        heading: this.newHeading,
        details: this.newDetails,
        completed: false,
    
      };
      this.taskService.addTask(newTask).subscribe((response) => {
        console.log(response);
        this.refreshTaskList.emit('added');
        this.newHeading = '';
        this.newDetails = '';
      });

    }
  }

}
