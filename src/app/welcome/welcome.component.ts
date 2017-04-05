import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ProjectService } from '../project.service'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [ ProjectService ]
})
export class WelcomeComponent {
  projects:FirebaseListObservable<any[]> = this.projectService.getProjects();

  constructor(private projectService: ProjectService) { }
}
