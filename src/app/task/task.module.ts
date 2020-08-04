import { NgModule } from '@angular/core';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { SharedModule } from '../shared/shared.module'
import { TaskRoutingModule } from './task-routing.module'
@NgModule({
  declarations: [TaskHeaderComponent, TaskListComponent, TaskItemComponent, TaskHomeComponent],
  imports: [
    SharedModule,
    SharedModule,
    TaskRoutingModule,
  ]
})
export class TaskModule { }
