import { Component } from '@angular/core';
// import { OverlayContainer } from '@angular/material'
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private oc:OverlayContainer){

  }
  darkTheme = false;
  switchTheme(even){
    this.darkTheme = even.checked;
  }

}
