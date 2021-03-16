import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/project.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  columns: any = ['Project Info', 'Project Manager', 'Assigned to', 'Status'];

  constructor(
    public projectService: ProjectService,
    public router: Router,

  ) { }

  ngOnInit() {
    this.projectService.listProject();
  }


  updateProject(dataObject: any) {
    this.router.navigate(['/editProject', { id: dataObject.id }]);
  }

  searchProject(keyEvent: string){
    const countLetter = keyEvent?.length;
    const word = keyEvent.toLowerCase()
    if(countLetter > 3){
      const resultAllData = this.projectService.data;
      const findProject = [];
      resultAllData.forEach((x) => {
        if((x.nameProject).substring(0, countLetter).toLowerCase() === word){
          findProject.push(x)
        }
      })
      this.projectService.listSearchProject(findProject)
    } else {
      this.projectService.listProject();
    }
  }

  deleteProject(idDelete: any){
    swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to retrieve the record!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Deleted!',
          `Record ${idDelete} has been deleted.`,
          'success'
        )
        this.projectService.removeProject(idDelete);
      }
    });
  }
}
