import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GrdFilterPipe  } from './grd-filter-pipe';

import { TaskListComponent } from './task-list.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('TaskListComponent', () => {
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

   beforeEach(async(() => {
    TestBed.configureTestingModule({
    imports: [FormsModule, ReactiveFormsModule , HttpClientTestingModule, RouterTestingModule ],
      declarations: [ TaskListComponent , GrdFilterPipe ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
