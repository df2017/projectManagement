import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProjectListComponent } from './pages/project-list/project-list.component';
import { ProjectAbmComponent } from './pages/project-abm/project-abm.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectAbmComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
