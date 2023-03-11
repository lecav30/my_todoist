import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent {
  @Input() group: any;
  tasks: any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  ngOnChanges() {
    this.getTasks();
  }

  getTasks():void {
    this.taskService
      .getTasksByGroupId(this.group.id)
      .subscribe((response) => {
        this.tasks = response;
        console.log(this.tasks);
      });
  }
}
