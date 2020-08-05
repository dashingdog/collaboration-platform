import { Component, OnInit ,  HostBinding } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../anims/router_anim'
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[slideToRight]
})
export class TaskHomeComponent implements OnInit {
  @HostBinding('@routeAnim') state;
  constructor(private dialog:MatDialog) { }
  lists=[]
  ngOnInit(): void {
    this.lists=[{
      id:1,
      name:"代办",
      tasks:[{
        id:1,
        priority:1,
        completed:false,
        desc:"任务一：去星巴克买咖啡",
        owner:{
          id:1,
          name:"张三",
          avatar:'avatars:svg-1'
        },
        dueDate:new Date()
      },{
        id:1,
        priority:2,
        completed:true,
        desc:"任务一：去星巴克买咖啡",
        owner:{
          id:1,
          name:"张三",
          avatar:'avatars:svg-2'
        },
        dueDate:new Date()
      }]
    },{
      id:1,
      name:"进行中",
      tasks:[{
        id:1,
        priority:3,
        completed:true,
        desc:"任务一：去星巴克买咖啡",
        owner:{
          id:1,
          name:"张三",
          avatar:'avatars:svg-3'
        },
        dueDate:new Date(),
        reminder:new Date()
      },{
        id:1,
        priority:4,
        completed:true,
        desc:"任务一：去星巴克买咖啡",
        owner:{
          id:1,
          name:"张三",
          avatar:'avatars:svg-4'
        },
        dueDate:new Date(),
        reminder:new Date()
      }]
    }]}
  launchNewListDialog(){
      const dialogRef =  this.dialog.open(NewTaskListComponent,{data:{
        title:"新建列表"
      }});
      dialogRef.afterClosed().subscribe(result=>{
        console.log(result);
      })
  }
  launchTaskDialog(){
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title:"新建任务"}});
  }
  launchCopyDialog(){
    const dialogRef = this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}});
  }
  launchUpdateTaskDialog(task){
    const dialogRef = this.dialog.open(NewTaskComponent,{data:{title:"修改任务",task}});
  }
  launchConfirmDialog(){
    const dialogRef =  this.dialog.open(ConfirmDialogComponent,{data:{
      title:"删除任务列表",
      content:"您确认删除该任务列表吗"
    }});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }
  launchEditListDialog(){
    const dialogRef =  this.dialog.open(NewTaskListComponent,{data:{
      title:"编辑列表"
    }});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    })
  }
}
