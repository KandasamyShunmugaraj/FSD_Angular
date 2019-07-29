import { Observable } from "rxjs";
import { TaskService } from "./../task.service";
import { Task } from "./../task";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.css"]
})
export class TaskListComponent implements OnInit {
  employees: Observable<Task[]>;

  constructor(private taskService: TaskService,
    private router: Router) {}

    taskList: any = [];

  ngOnInit() {
 this.reloadData();
  
  }


   reloadData() {

   const taskObservable = this.taskService.getAllTask();
        taskObservable.subscribe((taskData: Task[]) => {
        
            this.taskList = taskData;
        });
  
  }

  
editUser(editTaskId: string): void {
    window.localStorage.removeItem("editTaskId");
    window.localStorage.setItem("editTaskId", editTaskId);
    this.router.navigate(['edit']);
  };


  endTask(id: number) {
    this.taskService.endTask(id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  editTask(id: number) {
  }
}
