import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name":"企业协作平台",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "name":"自动化测试项目",
      "desc":"这是一个企业内部项目",
      "coverImg":"assets/img/covers/1.jpg"
    }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openNewProjectDialog(){
   const dialogRef =  this.dialog.open(NewProjectComponent,{data:{
    title:"新增项目"
  }})
  }

  launchInviteDialog(){
    const dialogRef =  this.dialog.open(InviteComponent,{data:"this is my data sent"});
    dialogRef.afterClosed().subscribe(result=>{
     console.log(result)
   })
  }
  launchUpdateDialog(){
    console.log('edit')
    const dialogRef =  this.dialog.open(NewProjectComponent,{data:{
      title:"编辑项目"
    }});
  }
  launchConfirmDialog(){
    const dialogRef =  this.dialog.open(ConfirmDialogComponent,{data:{
      title:"删除项目",
      content:"您确认删除该项目吗"
    }});
    dialogRef.afterClosed().subscribe(result=>{
      console.log(result)
    })
  }

}
