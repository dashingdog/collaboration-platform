import { Component, OnInit , Input , Output , EventEmitter , HostListener } from '@angular/core';
import {itemAnim} from '../../anims/item_anim'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[itemAnim]
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'in'
  // @Input() avatar;
  avatar:string
  constructor() { }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.widerPriority = 'out'
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.widerPriority = 'in'
  }
  ngOnInit(): void {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned'
  }
  onItemClick(){
    this.taskClick.emit()
  }
  onCheckBoxClick(ev:Event){
    ev.stopPropagation()
  }

}
