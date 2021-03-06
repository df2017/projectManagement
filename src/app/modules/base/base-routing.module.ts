import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {path: '', component: BaseComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
