import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() project: any;
  groups: any;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  ngOnChanges(): void {
    this.getGroups();
  }

  getGroups():void {
    this.groupService
      .getGroupsByProjectId(this.project.id)
      .subscribe((response) => {
        this.groups = response;
        console.log(this.groups);
      });
  }
}
