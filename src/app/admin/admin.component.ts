import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { ProjectService } from '../project.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ProjectService]
})
export class AdminComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(title: string, creator: string, description: string, image: string, goal: number, daysLeft: number) {
    var newProject: Project = new Project(title, creator, description, image, goal, daysLeft);
    this.projectService.addProject(newProject);
  }

}
