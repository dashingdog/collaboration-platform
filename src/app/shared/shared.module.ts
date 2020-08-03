import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from "@angular/material/button"
import { MatInputModule } from "@angular/material/input"
import { MatFormFieldModule } from "@angular/material/form-field"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
  ],
  exports:[
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
  ]
})
export class SharedModule {

 }
