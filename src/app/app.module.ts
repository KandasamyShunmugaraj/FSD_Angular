import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { HttpClientModule } from '@angular/common/http';
import {ReactiveFormsModule} from "@angular/forms";
import { GrdFilterPipe  } from './task-list/grd-filter-pipe';
@NgModule({
  declarations: [
    AppComponent,
    CreateTaskComponent,
    TaskListComponent,
    EditTaskComponent,
    GrdFilterPipe 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
