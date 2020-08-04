import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'projects',
    loadChildren:'app/project#ProjectModule',
    pathMatch:'full'
  },
  {
    path:'tasklist',
    loadChildren:'app/task#TaskModule',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
