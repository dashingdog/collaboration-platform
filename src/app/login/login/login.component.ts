import { Component, OnInit } from '@angular/core';
import {QuoteService } from '../../services/quote.service'
import { Quote } from '../../domain/quote.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  quote:Quote={
    cn:"",
    en:"",
    pic:""
  }
  constructor(private quoteServices$:QuoteService) {
    this.quoteServices$
    .getQuote()
    .subscribe(q=>this.quote=q);
  }

  ngOnInit(): void {

  }

}
