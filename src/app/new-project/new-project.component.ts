import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ ProjectService ]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }
  submitForm(title: string, creator: string, description: string, image: string, goal: number, daysLeft: number) {
    var newProject: Project = new Project(title, creator, description, image, goal, daysLeft);
    this.projectService.addProject(newProject);
  }

}
