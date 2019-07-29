import { TaskService } from './../task.service';
import { Task } from './../task';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  task: Task = new Task();
  submitted = false;
  taskList: Task[] = [];


  constructor(private taskService: TaskService) { }

  ngOnInit() {
  const taskObservable = this.taskService.getAllTask();
        taskObservable.subscribe((taskData: Task[]) => {
            this.taskList = taskData;
        });
  }

  newTask(): void {
    this.submitted = false;
    this.task = new Task();
  }

  save() {
    this.taskService.createTask(this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Task();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
