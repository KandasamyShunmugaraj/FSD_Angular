import { Component, OnInit , Inject} from '@angular/core';
import {Router} from "@angular/router";
import { TaskService } from './../task.service';
import { Task } from './../task';
import {FormBuilder, FormGroup, FormControl , Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  task: Task;
  taskList: Task[] = [];
  editForm: any;
  constructor(private formBuilder: FormBuilder,private router: Router, private taskService: TaskService) { }

  ngOnInit() {
    let editTaskId = window.localStorage.getItem("editTaskId");
    if(!editTaskId) {
      alert("Invalid action.")
      this.router.navigate(['app-task-list']);
      return;
    }

     const taskObservable = this.taskService.getAllTask();
        taskObservable.subscribe((taskData: Task[]) => {
            this.taskList = taskData;
        });
    
    this.taskService.getTask(editTaskId)
      .subscribe( data => {
        this.task = data;
       this.editForm = new FormGroup({
            'taskName': new FormControl(data.taskName),
            'parentTaskName': new FormControl(data.parentTaskName),
            'priority': new FormControl(data.priority),
            'startDate': new FormControl(data.startDate),
            'endDate': new FormControl(data.endDate)
        })
      });

       console.log(this.task);

      
  }

  onSubmit() {
    this.taskService.updateTask(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['app-task-list']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
