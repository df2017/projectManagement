import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectAbmComponent } from './pages/project-abm/project-abm.component';
import { ProjectListComponent } from './pages/project-list/project-list.component';

const routes: Routes = [
  { path: 'home', component: ProjectListComponent, data: { headerTitle: 'Project Management'}},
  { path: 'addProject', pathMatch: 'full', component: ProjectAbmComponent,
    data: { headerTitle: 'ADD Project'} },
  { path: 'editProject', pathMatch: 'full', component: ProjectAbmComponent,
    data: { headerTitle: 'Edit Project'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
