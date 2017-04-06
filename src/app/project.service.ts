import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.projects = angularFire.database.list('projects');
  }

  getProjects(){
    return this.projects;
  }

  addProject(newProject: Project) {
    this.projects.push(newProject);
  }

  editProject(updatedProject){
    var projectEntryInFirebase = this.getProjectById(updatedProject.$key);
    projectEntryInFirebase.update({title: updatedProject.title, creator:  updatedProject.creator, description: updatedProject.description, image:  updatedProject.image, goal: updatedProject.goal, daysLeft: updatedProject.daysLeft});
  }

  getProjectById(chosenProjectId: string){
    return this.angularFire.database.object('projects/' + chosenProjectId);
  }
}
