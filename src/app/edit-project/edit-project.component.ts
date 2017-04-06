import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

//
@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit{
  @Input() editProject;
//
  constructor(private projectService: ProjectService) { }
//
  ngOnInit() {
    console.log(this.editProject);
 }

 beginUpdatingProject(projectToEdit){
   this.projectService.editProject(projectToEdit);
   console.log(projectToEdit);
 }
}
