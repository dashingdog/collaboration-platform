import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent implements OnInit {
  @Input() header = ''
  @Output() newTask = new EventEmitter<void>();
  @Output() moveAll = new EventEmitter<void>();
  @Output() delList = new EventEmitter<void>();
  @Output() onEditList = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onNewTaskClick(){
    this.newTask.emit();
  }
  onMoveAllClick(){
    this.moveAll.emit();
  }
  onEditListClick(){
    this.onEditList.emit()
  }
  onDelListClick(){
    this.delList.emit()
  }
}
