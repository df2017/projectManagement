import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../modules/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  $projects: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  data: Project[] = [];
  constructor() {}

  listProject(){
    this.$projects.next(this.data);
  }

  listProjectId(id: any){
    const resutlSearch = this.data.find(x => x.id === id);
    return resutlSearch;
  }

  addProject(params: Project): ProjectService {
    this.data.push(params)
    this.$projects.next(this.data);
    return this;
   }

  upgradeProject(id: any, dataObject: any) {
    const resutlSearch = this.data.find(x => x.id === id);
    const index = this.data.indexOf(resutlSearch);
    this.data.splice(index, 1, dataObject);
    this.$projects.next(this.data);
  }

  removeProject(id: any) {
    const itemsDelete = this.data.filter((x) => x.id !== id);
    this.data = itemsDelete;
    this.$projects.next(this.data);
  }
}
