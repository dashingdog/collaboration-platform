import { Component, OnInit , Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef }from '@angular/material/dialog';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  title=''
  //  接收数据,回传参数
  constructor(@Inject(MAT_DIALOG_DATA) private data,private dialogRef:MatDialogRef<NewProjectComponent>) { }

  ngOnInit(): void {
    console.log(JSON.stringify(this.data))
    this.title =this.data.title;
  }

  onClick(result:boolean){
    this.dialogRef.close(result);
  }

}
