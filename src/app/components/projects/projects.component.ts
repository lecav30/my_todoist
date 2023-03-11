import { Component, OnInit, Input } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() project: any;
  groups: any;

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupService.getGroups().subscribe((response) => {
      this.groups = response;
      console.log(this.groups);
    });
  }
}
