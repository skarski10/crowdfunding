import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  projects:FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit(){
  this.projects = this.projectService.getProjects();
}

  goToDetailPage(clickedProject){
    this.router.navigate(['projects', clickedProject.$key]);
  };
}
