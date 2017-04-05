import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';
import { Project } from '../project.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ ProjectService ]
})
export class WelcomeComponent {
  projects:FirebaseListObservable<any[]> = this.projectService.getProjects();

  constructor(private router: Router, private projectService: ProjectService) { }

  goToDetailPage(project: Project){
    this.router.navigate(['projects', project.id])
  };
}
