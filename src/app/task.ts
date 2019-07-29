export class Task {
  taskId:number;
  taskName: string;
  startDate: Date;
  endDate: Date;
  parentTask:string;
  priority:string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
