import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteService } from './quote.service'

@NgModule({
  declarations: [],
  providers:[
    QuoteService
  ],
  imports: [
    CommonModule
  ]
})
export class ServicesModule { }
