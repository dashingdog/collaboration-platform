import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectItemComponent } from './project-item/project-item.component';
const routes: Routes = [
  {
    path: 'project',
    component: ProjectListComponent,
  },
  {
    path: 'projectInfo',
    component: ProjectItemComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule {
}
