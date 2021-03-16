import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/project.service';
import swal from 'sweetalert2';
import { NavbarComponent } from '../../../navbar/navbar.component';

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
