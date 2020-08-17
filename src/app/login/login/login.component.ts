import { Component, OnInit } from '@angular/core';
import {QuoteService } from '../../services/quote.service'
import { Quote } from '../../domain/quote.model';
import { FormBuilder , FormGroup  } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  quote:Quote={
    cn:"",
    en:"",
    pic:""
  }
  constructor(private quoteServices$:QuoteService,private fb:FormBuilder) {
    this.quoteServices$
    .getQuote()
    .subscribe(q=>this.quote=q);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email:[],
      password:[],
    })
  }

}
