import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/core/project.service';
import { StatusEnum } from 'src/app/modules/models/enum/status-enum';
import * as uuid from 'uuid';
import * as moment from 'moment';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-abm',
  templateUrl: './project-abm.component.html',
  styleUrls: ['./project-abm.component.scss']
})
export class ProjectAbmComponent implements OnInit {

  buttonText: string = "Create Project";
  form: FormGroup;
  params: any;
  dataForm: any;

  listStatus: any = [
    { id: StatusEnum.enabled, name: 'Enabled' },
    { id: StatusEnum.disabled, name: 'Disabled' },
  ];
  submitted = false;
  uuidValue: string = "";
  listManager: any = [
    {id:1, name:'Clark Kent'},
    {id:2, name:'Peter Parker'},
    {id:3, name:'Bruce Wayne'},
  ];
  listDeveloper: any = [
    {id:1, name:'Luke Skywalker'},
    {id:2, name:'Dark Vader'},
    {id:3, name:'Obi-Wan Kenobi'}
  ];

  constructor(
    public fb: FormBuilder,
    public projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
  ) {
    this.form = this.fb.group({
      id: [''],
      nameProject: [null, [Validators.required]],
      description: [null, [Validators.required]],
      manager: [null, [Validators.required]],
      assigned: [null, [Validators.required]],
      status: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((values) => {
      const paramUrl = values;
      if (paramUrl?.id !== 'undefined' && paramUrl?.id) {

        this.buttonText = 'Save Changes';
        const params = this.projectService.listProjectId(values.id);
        this.form = this.fb.group({
          id: [params.id],
          nameProject: [params.nameProject, [Validators.required]],
          description: [params.description, [Validators.required]],
          manager: [params.manager, [Validators.required]],
          assigned: [params.assigned, [Validators.required]],
          status: [params.status, [Validators.required]],
          createdAt: [params.createdAt]
        })
      }
    })
  }

  validatedInput(value: string, form: FormGroup, submitted: boolean): boolean {
    return form.get(value).invalid && submitted;
  }

  submit() {
    this.dataForm = "";
    this.uuidValue = "";
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.dataForm = this.form.value;
      this.uuidValue = uuid.v4();
      if (this.dataForm.id !== "" && this.dataForm.id) {
        this.projectService.upgradeProject(this.dataForm.id, this.dataForm);
        swal.fire(
          "Success",
          "Project Updated. ok",
        )
      } else {
        const dateNow = moment(new Date()).format('DD/MM/YYYY hh:mm A');
        this.dataForm.createdAt = dateNow;
        this.dataForm.id = this.uuidValue;
        const result = this.projectService.addProject(this.dataForm);
        if(result.data.length > 0){
          swal.fire(
            "Success",
            "Project Created. ok",
          )
          this.submitted = false;
          this.dataForm = {};
          this.form.reset();
        }
      }
    }
  }
}
