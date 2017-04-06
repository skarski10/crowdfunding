import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {
  projectId: string;
  projectToDisplay: Project;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
     this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
     this.projectToDisplay = new Project
     (dataLastEmittedFromObserver.title,
     dataLastEmittedFromObserver.creator,
     dataLastEmittedFromObserver.description,
     dataLastEmittedFromObserver.image,
     dataLastEmittedFromObserver.goal,
     dataLastEmittedFromObserver.daysLeft)
   })
  }
}
